from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
from pypdf import PdfReader
import os

# Load Environment Variables
load_dotenv(override=True)

# Initialize FastAPI
app = FastAPI()

# Input Model
class ChatRequest(BaseModel):
    message: str
    history: list = []

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Load Context (Resume & Summary)
RESUME_PATH = "me/Resume_Siddhant Kumar Sahu.pdf"
SUMMARY_PATH = "me/summary.txt"

context_data = ""

def load_context():
    global context_data
    try:
        # Load PDF
        reader = PdfReader(RESUME_PATH)
        linkedin_text = ""
        for page in reader.pages:
            text = page.extract_text()
            if text:
                linkedin_text += text
        
        # Load Summary
        with open(SUMMARY_PATH, "r", encoding="utf-8") as f:
            summary_text = f.read()
            
        context_data = f"## Summary:\n{summary_text}\n\n## Resume/LinkedIn:\n{linkedin_text}\n\n"
        print("✅ Context loaded successfully.")
    except Exception as e:
        print(f"⚠️ Error loading context: {e}")
        context_data = "Error loading context data."

# Load on startup
load_context()

NAME = "Siddhant Kumar Sahu"
SYSTEM_PROMPT = f"""You are acting as {NAME}. You are answering questions on {NAME}'s website, 
particularly questions related to {NAME}'s career, background, skills and experience. 
Your responsibility is to represent {NAME} for interactions on the website as faithfully as possible. 
You are given a summary of {NAME}'s background and LinkedIn profile which you can use to answer questions. 
Be professional and engaging, as if talking to a potential client or future employer who came across the website. 
If you don't know the answer, say so.

{context_data}

With this context, please chat with the user, always staying in character as {NAME}."""

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Construct messages
        # Note: History from frontend comes as [{role: 'user', text: '...'}, ...]
        # Map frontend 'text' to openai 'content'
        formatted_history = []
        for msg in request.history:
            role = msg.get("role")
            content = msg.get("text")
            if role and content:
                formatted_history.append({"role": role, "content": content})

        messages = [{"role": "system", "content": SYSTEM_PROMPT}] + formatted_history + [{"role": "user", "content": request.message}]
        
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

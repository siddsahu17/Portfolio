# Siddhant's AI Assistant Backend

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Create `.env` file with your API keys:
```bash
cp .env.example .env
```

3. Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_actual_api_key_here
```

4. Start the server:
```bash
python main.py
```

Or use the batch file:
```bash
start.bat
```

The API will be available at `http://localhost:8000`

## Files Required

- `me/Resume_Siddhant Kumar Sahu.pdf` - Your resume
- `me/summary.txt` - Your professional summary
- `.env` - Environment variables with API keys
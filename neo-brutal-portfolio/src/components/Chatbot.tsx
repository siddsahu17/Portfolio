import { X, Send, Bot, Minimize2, Maximize2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hello! I am Siddhant's AI Assistant. Ask me about his projects, skills, or experience." }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
        const response = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                message: input,
                history: messages 
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to get response");
        }

        const data = await response.json();
        setMessages(prev => [...prev, { role: 'assistant', text: data.response }]);
    } catch (error) {
        console.error("Chat Error:", error);
        setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting to the server. Please check if the backend is running." }]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[90vw] md:w-[400px] h-[500px] flex flex-col bg-background border-[3px] border-foreground shadow-brutal animate-in slide-in-from-bottom-5 fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-foreground text-background border-b-[3px] border-foreground">
        <div className="flex items-center gap-2 font-bold font-mono">
          <Bot size={20} />
          <span>Siddhant's Virtual Presence</span>
        </div>
        <button 
          onClick={onClose}
          className="hover:bg-background hover:text-foreground p-1 rounded transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                msg.role === 'user' 
                  ? 'bg-white ml-4' 
                  : 'bg-accent text-accent-foreground mr-4'
              }`}
            >
              <p className="text-sm font-medium">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-background border-t-[3px] border-foreground flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 font-mono text-sm"
        />
        <Button 
          type="submit" 
          size="icon"
          className="border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default Chatbot;

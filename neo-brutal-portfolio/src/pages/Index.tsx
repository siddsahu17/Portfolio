import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;

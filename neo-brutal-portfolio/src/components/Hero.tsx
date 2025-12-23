import { ArrowRight, Download, Bot } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          <div 
            className="inline-block brutal-border bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Available for Work
          </div>

          {/* Name */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            SIDDHANT<br />
            KUMAR SAHU<span className="text-accent">.</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            AI Engineer building real-time data platforms & ML systems.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="default" size="lg" asChild>
              <a href="#projects">
                View Work <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="Resume_Siddhant Kumar Sahu.pdf" target="_blank" rel="noopener noreferrer">
                View Resume <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="Resume_Siddhant Kumar Sahu.pdf" download>
                Download Resume <Download className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="secondary" size="lg" onClick={onOpenChat}>
                AI Assistant <Bot className="ml-2" size={18} />
            </Button>
          </div>

          {/* Quick Info Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <p className="section-title">Focus</p>
              <p className="font-semibold">ML Systems</p>
            </div>
            <div>
              <p className="section-title">Stack</p>
              <p className="font-semibold">Python / React</p>
            </div>
            <div>
              <p className="section-title">Location</p>
              <p className="font-semibold">India / Remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

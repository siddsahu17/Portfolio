import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 border-t-[3px] border-foreground bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build<br />
            Something Real<span className="text-accent">.</span>
          </h2>

          <p className="text-lg text-primary-foreground/70 mb-10">
            Open for AI Engineering roles.
          </p>

          <a 
            href="mailto:catchmesiddhant@gmail.com"
            className="inline-block text-xl md:text-2xl font-bold mb-8 link-underline hover:text-accent transition-colors"
          >
            catchmesiddhant@gmail.com
          </a>

          <div className="flex gap-4 mb-16">
            <Button variant="outline" size="icon" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:catchmesiddhant@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          <footer className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Siddhant Kumar Sahu. System Online.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;

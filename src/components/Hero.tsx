
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const typerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const subtitle = "Crafting intelligent solutions through code.";
    const typer = typerRef.current;
    
    if (typer) {
      let i = 0;
      typer.textContent = '';
      
      const typeWriter = () => {
        if (i < subtitle.length) {
          typer.textContent += subtitle.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      typeWriter();
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 text-foreground">
            Suyash Sawant
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8">
            <span ref={typerRef} className="border-r-2 border-primary animate-pulse"></span>
            <br />
            <span className="font-medium text-primary mt-4 inline-block">
              Backend Developer | ML Enthusiast | Mobile App Developer
            </span>
          </div>
        </div>
        
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#" className="professional-button">
            <Download size={20} className="mr-2" />
            Download CV
          </a>
          <a href="#contact" className="professional-button-outline">
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Suyashh-s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-full hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/suyash-sawant-9a3898317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-full hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a 
            href="#contact" 
            className="p-3 border border-gray-300 rounded-full hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

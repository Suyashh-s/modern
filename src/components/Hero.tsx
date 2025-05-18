
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const typerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animated typing effect for the subtitle
    const subtitle = "Crafting intelligent vision through code.";
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
    
    // Dynamic hover effects for neon elements
    const neonElements = document.querySelectorAll('.neon-glow');
    neonElements.forEach(el => {
      el.addEventListener('mouseover', () => {
        document.querySelectorAll('.particle-boost').forEach((particle: any) => {
          particle.dataset.boost = 'true';
        });
      });
      
      el.addEventListener('mouseout', () => {
        document.querySelectorAll('.particle-boost').forEach((particle: any) => {
          particle.dataset.boost = 'false';
        });
      });
    });
    
    return () => {
      neonElements.forEach(el => {
        el.removeEventListener('mouseover', () => {});
        el.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Animated overlay scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="w-full h-1 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/80 to-neon-cyan/0 animate-[scan-down_8s_linear_infinite]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-7xl font-orbitron font-bold mb-4 glitch-effect neon-glow"
          data-text="Suyash Sawant"
        >
          Suyash Sawant
        </h1>
        
        <div className="text-xl md:text-2xl font-rajdhani text-gray-300 mb-8">
          <span ref={typerRef} className="typing-cursor"></span>
          <br />
          <span className="font-medium text-neon-cyan animate-pulse-slow inline-block">Backend Developer | ML Enthusiast | Android/iOS Developer</span>
        </div>
        
        {/* Animated decorative element */}
        <div className="my-6 flex justify-center">
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-neon-cyan to-transparent relative">
            <div className="absolute -top-1 h-2 w-2 bg-neon-cyan rounded-full left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#" className="cyber-button group relative overflow-hidden">
            <span className="relative z-10">Download CV</span>
            <span className="absolute inset-0 bg-neon-cyan/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#contact" className="cyber-button alt group relative overflow-hidden">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-neon-purple/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
        
        {/* Social Icons with enhanced hover effects */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Suyashh-s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-gray-600 rounded-md relative overflow-hidden group transition-all duration-300 ease-out"
            aria-label="GitHub"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/20 to-neon-cyan/0 opacity-0 group-hover:opacity-100 group-hover:animate-[hologram-scan_3s_linear_infinite]"></span>
            <Github size={24} className="relative z-10 group-hover:text-neon-cyan transition-colors duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/suyash-sawant-9a3898317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-gray-600 rounded-md relative overflow-hidden group transition-all duration-300 ease-out"
            aria-label="LinkedIn"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/20 to-neon-purple/0 opacity-0 group-hover:opacity-100 group-hover:animate-[hologram-scan_3s_linear_infinite]"></span>
            <Linkedin size={24} className="relative z-10 group-hover:text-neon-purple transition-colors duration-300" />
          </a>
          <a 
            href="#contact" 
            className="p-2 border border-gray-600 rounded-md relative overflow-hidden group transition-all duration-300 ease-out"
            aria-label="Email"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0 opacity-0 group-hover:opacity-100 group-hover:animate-[hologram-scan_3s_linear_infinite]"></span>
            <Mail size={24} className="relative z-10 group-hover:text-neon-blue transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const emailAddress = "suyashsawant9114@gmail.com";
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };
  
  return (
    <section id="contact" className="section-container bg-cyber-dark relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative z-10">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-8 text-lg">
            Interested in collaborating or have a project in mind? Let's connect and create something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <a 
              href={`mailto:${emailAddress}`}
              className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyber-darkBlue/30 border border-neon-cyan/30 mb-4 group-hover:border-neon-cyan group-hover:shadow-glow transition-all duration-300">
                <Mail size={28} className="text-neon-cyan group-hover:animate-pulse" />
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-neon-cyan">Email</h3>
              <p className="text-gray-300 break-all">{emailAddress}</p>
            </a>
            
            <a 
              href="https://github.com/Suyashh-s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyber-darkBlue/30 border border-neon-cyan/30 mb-4 group-hover:border-neon-cyan group-hover:shadow-glow transition-all duration-300">
                <Github size={28} className="text-neon-cyan group-hover:animate-pulse" />
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-neon-cyan">GitHub</h3>
              <p className="text-gray-300 flex items-center">
                github.com/suyashsawant
                <ExternalLink size={14} className="ml-1" />
              </p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/suyash-sawant-9a3898317/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyber-darkBlue/30 border border-neon-cyan/30 mb-4 group-hover:border-neon-cyan group-hover:shadow-glow transition-all duration-300">
                <Linkedin size={28} className="text-neon-cyan group-hover:animate-pulse" />
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-neon-cyan">LinkedIn</h3>
              <p className="text-gray-300 flex items-center">
                linkedin.com/in/suyashsawant
                <ExternalLink size={14} className="ml-1" />
              </p>
            </a>
          </div>
          
          <div className="mt-16 max-w-lg mx-auto">
            <p className="text-gray-300 mb-4">
              I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="inline-block">
              <a 
                href={`mailto:${emailAddress}`}
                onClick={handleEmailClick}
                className="cyber-button"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-neon-cyan/20 -ml-6 -mb-6 opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-neon-cyan/20 -mr-6 -mt-6 opacity-30"></div>
    </section>
  );
};

export default Contact;

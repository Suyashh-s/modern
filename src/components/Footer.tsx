
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center text-gray-400 bg-cyber-black relative overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      {/* Animated glowing line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70 animate-pulse-glow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-4 text-xs font-orbitron tracking-widest animate-text-flicker">
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">
            This is just the beginning....
          </span>
        </div>
        
        <div className="text-sm">
          © {new Date().getFullYear()} Suyash Sawant. All rights reserved.
        </div>
        
        <div className="mt-2 text-xs flex items-center justify-center gap-2">
          <span className="text-neon-cyan">Designed with </span>
          <span className="text-neon-purple relative inline-block">
            {'<Code/>'}
            <span className="absolute -inset-1 bg-neon-purple/10 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
          <span className="text-neon-cyan"> & </span>
          <span className="text-neon-purple">Creativity</span>
        </div>
        
        {/* Animated cyber decoration */}
        <div className="flex justify-center mt-6">
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

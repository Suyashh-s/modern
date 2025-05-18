import React from 'react';
import profileImage from '../assets/aa.jpg';

const About = () => (
  <section id="about" className="section-container">
    <h2 className="section-title">About Me</h2>
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 bg-cyber-dark/50 p-6 rounded-lg border border-gray-700 relative overflow-hidden cyber-ripple subtle-glow hover:border-neon-cyan transition-colors duration-300">
        {/* Animated overlay scan line */}
        <div className="subtle-scan-line"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="relative group mx-auto md:mx-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neon-cyan p-1 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 animate-spin-slow pointer-events-none"></div>
                <img 
                  src={profileImage} 
                  alt="Suyash Sawant" 
                  className="w-full h-full object-cover rounded-full z-10 relative"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan">Suyash Sawant</h3>
              <p className="text-gray-300 opacity-80">Backend Developer | ML Enthusiast | Android/iOS Developer</p>
              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                <a href="https://github.com/Suyashh-s" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/suyash-sawant-9a3898317/" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-linkedin">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter-x">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a passionate developer skilled in Full Stack Development, Machine Learning, Blockchain, and Android/iOS Mobile App Development. 
            With a background in AI and software development, I create intelligent solutions that are  
            innovative, end-to-end solutions that combine sleek design with robust functionality.
          </p>
          <p className="text-gray-300 leading-relaxed">
          <strong>Smart India Hackathon (SIH) 2024 Winner</strong> and finalist in multiple national-level hackathons, consistently delivering high-impact projects under tight deadlines. Whether it's cross-platform mobile apps or cutting-edge AI and Web3 solutions, ready to tackle the next big challenge with creativity and speed..
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <div className="py-3 px-4 rounded-md bg-cyber-dark/30 backdrop-blur-sm border border-gray-700 data-stream subtle-glow hover:border-neon-cyan transition-colors duration-300">
          <div className="text-neon-cyan text-4xl font-bold mb-1 animate-subtle-pulse">3+</div>
          <div className="text-gray-400">Years Experience in Full Stack Development</div>
        </div>
        <div className="py-3 px-4 rounded-md bg-cyber-dark/30 backdrop-blur-sm border border-gray-700 data-stream subtle-glow hover:border-neon-purple transition-colors duration-300">
          <div className="text-neon-purple text-4xl font-bold mb-1 animate-subtle-pulse">15+</div>
          <div className="text-gray-400">Projects Completed</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

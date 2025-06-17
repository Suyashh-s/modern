
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Award, Users, Code, Rocket } from 'lucide-react';
import profileImage from '../assets/aa.jpg';

const CinematicAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "15+", label: "Projects Launched", icon: Rocket },
    { number: "5+", label: "Tech Stacks", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: Users }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gray-900" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            variants={slideVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-xl shadow-cyan-400/20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <img 
                        src={profileImage} 
                        alt="Suyash Sawant" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Suyash Sawant</h3>
                      <p className="text-cyan-400 font-medium">Founder & Tech Innovator</p>
                      <p className="text-purple-400 text-sm mt-1">Smart India Hackathon 2024 Winner</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-8">
                    {[
                      { href: "https://github.com/Suyashh-s", icon: Github },
                      { href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/", icon: Linkedin }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 hover:bg-cyan-400/10 transition-colors group rounded-2xl border border-gray-600/50 hover:border-cyan-400/50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Mission Statement</h4>
              <p className="text-gray-300 leading-relaxed">
                "I'm on a mission to solve real-world problems with code and creativity. Building scalable solutions that bridge the gap between innovation and practical impact."
              </p>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Passionate tech entrepreneur skilled in <span className="text-cyan-400 font-medium">Full Stack Development</span>, 
              <span className="text-purple-400 font-medium"> AI/ML</span>, 
              <span className="text-cyan-400 font-medium"> Blockchain</span>, and 
              <span className="text-purple-400 font-medium"> Mobile Development</span>. 
              I specialize in building intelligent solutions that transform ideas into scalable businesses.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              As a <span className="text-cyan-400 font-semibold">Smart India Hackathon 2024 Winner</span> and 
              multi-hackathon finalist, I consistently deliver high-impact projects under pressure. 
              Whether it's B2B SaaS platforms, AI-powered applications, or Web3 solutions, 
              I'm ready to turn your vision into reality.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-cyan-400/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon size={32} className="text-cyan-400" />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicAbout;

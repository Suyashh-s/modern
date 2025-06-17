
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Award, Users } from 'lucide-react';
import profileImage from '../assets/aa.jpg';

const CinematicAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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
        ease: [0.25, 0.46, 0.45, 0.94]
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const stats = [
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "15+", label: "Projects Completed", icon: Users }
  ];

  return (
    <section id="about" className="section-container bg-gradient-to-b from-muted/20 to-background" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title text-center glow-text"
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
                className="cinematic-card p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
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
                      <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">Suyash Sawant</h3>
                      <p className="text-primary font-medium">Full Stack Developer & AI Enthusiast</p>
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
                        className="p-3 cinematic-card hover:bg-primary/10 transition-colors group"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
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
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate developer skilled in <span className="text-primary font-medium">Full Stack Development</span>, 
              <span className="text-primary font-medium"> Machine Learning</span>, 
              <span className="text-primary font-medium"> Blockchain</span>, and 
              <span className="text-primary font-medium"> Mobile App Development</span>. 
              With a background in AI and software development, I create intelligent solutions that combine innovation with practical functionality.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              <span className="text-primary font-semibold">Smart India Hackathon (SIH) 2024 Winner</span> and finalist in multiple national-level hackathons, 
              consistently delivering high-impact projects under tight deadlines. Whether it's cross-platform mobile apps or cutting-edge AI and Web3 solutions, 
              I'm ready to tackle the next big challenge with creativity and precision.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="cinematic-card p-8 text-center group hover:bg-gradient-to-br hover:from-primary/5 hover:to-blue-600/5"
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
                <stat.icon size={32} className="text-primary" />
              </motion.div>
              <div className="text-5xl font-bold text-primary mb-2 glow-text">{stat.number}</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicAbout;

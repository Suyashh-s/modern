
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import profileImage from '../assets/aa.jpg';

const CinematicHero: React.FC = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const subtitle = "Crafting intelligent solutions through code.";
    const cursor = cursorRef.current;
    
    if (cursor) {
      let i = 0;
      cursor.textContent = '';
      
      const typeWriter = () => {
        if (i < subtitle.length) {
          cursor.textContent += subtitle.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      };
      
      setTimeout(typeWriter, 1500);
    }
  }, []);

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

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <div className="floating-element top-20 left-20 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="floating-element bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl" />
      <div className="floating-element top-1/2 right-20 w-16 h-16 border-2 border-primary/30 rotate-45" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <div className="relative inline-block mb-8">
            <motion.div
              className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={profileImage} 
                alt="Suyash Sawant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-playfair font-bold mb-6 glow-text"
            variants={itemVariants}
          >
            Suyash Sawant
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-12 min-h-[60px]"
          variants={itemVariants}
        >
          <span ref={cursorRef} className="border-r-2 border-primary animate-pulse"></span>
          <motion.div
            className="font-medium text-primary mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            Backend Developer | ML Enthusiast | Mobile App Developer
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
          variants={itemVariants}
        />
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          <motion.a 
            href="#" 
            className="glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="mr-2" />
            Download CV
          </motion.a>
          <motion.a 
            href="#contact" 
            className="cinematic-card px-8 py-4 font-medium rounded-full hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div
          className="flex justify-center gap-8"
          variants={containerVariants}
        >
          {[
            { href: "https://github.com/Suyashh-s", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/", icon: Linkedin, label: "LinkedIn" },
            { href: "#contact", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('#') ? '_self' : '_blank'}
              rel={social.href.startsWith('#') ? '' : 'noopener noreferrer'}
              className="p-4 cinematic-card hover:bg-primary/10 transition-colors group"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-primary/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;

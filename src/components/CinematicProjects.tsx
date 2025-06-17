
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Play, X } from 'lucide-react';

const CinematicProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "RAKSHA",
      description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
      longDescription: "Advanced computer vision system using YOLO and TensorFlow for real-time threat detection. Features include facial recognition, anomaly detection, and automated alert systems.",
      video: "/videos/raksha.mp4",
      github: "#",
      demo: "#",
      tags: ["Node.js", "TensorFlow", "React.js", "Flutter"],
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      title: "VYOM ASSISTS",
      description: "Business Analytics-Based Appointment Management System for Efficient Customer Service.",
      longDescription: "Comprehensive appointment management system with AI-powered analytics, customer behavior prediction, and automated scheduling optimization.",
      video: "/videos/vyom.mp4",
      github: "#",
      demo: "#",
      tags: ["MERN Stack", "BERT", "YOLO"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "INFLUENCER HUB",
      description: "An ecosystem for brands, influencers, and freelancers to connect, collaborate, and grow—powered by AI matchmaking.",
      longDescription: "AI-powered platform connecting brands with influencers through intelligent matchmaking algorithms and real-time analytics dashboard.",
      video: "/videos/infhub.mp4",
      github: "#",
      demo: "#",
      tags: ["JavaScript", "D3.js", "React"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      title: "LOK YATRI",
      description: "A smart travel companion connecting travelers with authentic local experiences and seamless navigation",
      longDescription: "Comprehensive travel platform with AI-powered recommendations, real-time navigation, and local experience booking system.",
      video: "/videos/lokyatri.mp4",
      github: "#",
      demo: "#",
      tags: ["WebSockets", "React Native", "Flask"],
      color: "from-green-500 to-emerald-600"
    }
  ];

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
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title text-center glow-text"
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cinematic-card overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  src={project.video}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3 
                      className="font-playfair text-2xl font-bold text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 text-sm line-clamp-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <Play size={20} className="text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className={`w-full h-1 bg-gradient-to-r ${project.color} rounded-full mb-4`} />
                
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full 
                      group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="max-w-5xl w-full cinematic-card overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X size={20} />
                    </button>
                    
                    <div className="aspect-video">
                      <video 
                        className="w-full h-full object-cover" 
                        autoPlay 
                        muted 
                        loop 
                        controls
                        playsInline
                        src={project.video}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className={`w-full h-1 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
                    
                    <h2 className="text-3xl font-playfair font-bold mb-4 glow-text">
                      {project.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.github} 
                        className="glow-button bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} className="mr-2" />
                        View Code
                      </motion.a>
                      
                      <motion.a 
                        href={project.demo} 
                        className="glow-button"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CinematicProjects;

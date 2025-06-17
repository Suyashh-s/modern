
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Play, X, Zap, Brain, Globe, Smartphone } from 'lucide-react';

const CinematicProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "RAKSHA",
      subtitle: "AI-Powered Surveillance System",
      description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
      longDescription: "Advanced computer vision system using YOLO and TensorFlow for real-time threat detection. Features include facial recognition, anomaly detection, and automated alert systems with 95% accuracy in threat identification.",
      video: "/videos/raksha.mp4",
      github: "#",
      demo: "#",
      tags: ["AI", "Computer Vision", "Safety Tech"],
      technologies: ["Node.js", "TensorFlow", "React.js", "Flutter"],
      category: "AI",
      icon: Brain,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      title: "VYOM ASSISTS", 
      subtitle: "Business Analytics Platform",
      description: "Business Analytics-Based Appointment Management System for Efficient Customer Service",
      longDescription: "Comprehensive appointment management system with AI-powered analytics, customer behavior prediction, and automated scheduling optimization. Increased client efficiency by 40% and reduced no-shows by 60%.",
      video: "/videos/vyom.mp4",
      github: "#",
      demo: "#",
      tags: ["B2B SaaS", "Analytics", "Automation"],
      technologies: ["MERN Stack", "BERT", "YOLO"],
      category: "SaaS",
      icon: Globe,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "INFLUENCER HUB",
      subtitle: "AI Matchmaking Platform",
      description: "An ecosystem for brands, influencers, and freelancers to connect, collaborate, and grow—powered by AI matchmaking",
      longDescription: "AI-powered platform connecting brands with influencers through intelligent matchmaking algorithms and real-time analytics dashboard. Facilitated over $2M in brand partnerships with 98% satisfaction rate.",
      video: "/videos/infhub.mp4",
      github: "#", 
      demo: "#",
      tags: ["Web3", "Marketplace", "AI Matching"],
      technologies: ["JavaScript", "D3.js", "React"],
      category: "Web3",
      icon: Zap,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      title: "LOK YATRI",
      subtitle: "Smart Travel Companion",
      description: "A smart travel companion connecting travelers with authentic local experiences and seamless navigation",
      longDescription: "Comprehensive travel platform with AI-powered recommendations, real-time navigation, and local experience booking system. Serving 10K+ travelers with personalized itineraries and local insights.",
      video: "/videos/lokyatri.mp4",
      github: "#",
      demo: "#",
      tags: ["Mobile", "Travel Tech", "Location AI"],
      technologies: ["WebSockets", "React Native", "Flask"],
      category: "Mobile",
      icon: Smartphone,
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world solutions that blend innovation with impact
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-400/30 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project category badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-medium`}>
                  <project.icon size={14} />
                  {project.category}
                </div>
              </div>

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
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3 
                      className="font-bold text-2xl text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-cyan-400 text-sm font-medium mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      {project.subtitle}
                    </motion.p>
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
                
                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-gray-800/50 border border-gray-700/50 text-gray-300 px-3 py-1 rounded-full 
                      group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
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
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="max-w-5xl w-full bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden"
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
                    
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon size={24} className="text-cyan-400" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </h2>
                    </div>
                    
                    <p className="text-cyan-400 font-medium text-lg mb-4">{project.subtitle}</p>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Category Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="bg-gray-800/50 border border-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.github} 
                        className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-white hover:bg-gray-700/50 hover:border-gray-600/50 transition-colors rounded-full"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                      
                      <motion.a 
                        href={project.demo} 
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition-colors rounded-full"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
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

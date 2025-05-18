import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Mock project data
const projectsData = [
  {
    id: 1,
    title: "RAKSHA",
    description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
    video: "/src/assets/raksha.mp4", // placeholder
    github: "#",
  
    tags: ["Node.js", "TensorFlow", "React.js,Flutter"]
  },
  {
    id: 2,
    title: "VYOM ASSITS",
    description: "Business Analytics-Based Appointment Management System for Efficient Customer Service.",
    video: "/src/assets/vyom.mp4", // placeholder
    github: "#",
    tags: ["Mern Stack", "Bert", "Yolo"]
  },
  {
    id: 3,
    title: "INFLUENCER HUB",
    description: "An ecosystem for brands, influencers, and freelancers to connect, collaborate, and grow—powered by AI matchmaking and real-time analytics.",
    video: "/src/assets/infhub.mp4", // placeholder
    github: "#",
  
    tags: ["JavaScript", "D3.js", "React"]
  },
  {
    id: 4,
    title: "LOK YATRI",
    description: "A smart travel companion connecting travelers with authentic local experiences and seamless navigation",
    video: "/src/assets/lokyatri.mp4", // placeholder
    github: "#",
    tags: ["WebSockets", "React Native", "Flask"]
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  useEffect(() => {
    // Animation for section reveal on scroll
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        const isVisible = sectionPosition.top < window.innerHeight * 0.75;
        setIsVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };
  
  return (
    <section 
      id="projects" 
      className={`section-container relative ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      <h2 className="section-title relative">
        Dev Deck
        <span className="absolute -right-4 -top-4 w-8 h-8 opacity-70">
          <span className="absolute w-full h-[1px] bg-neon-cyan top-1/2 left-0 animate-pulse"></span>
          <span className="absolute h-full w-[1px] bg-neon-cyan left-1/2 top-0 animate-pulse"></span>
        </span>
      </h2>
      
      {/* Tech circuit decoration */}
      <div className="absolute -left-20 top-20 w-40 h-40 opacity-20 hidden md:block">
        <div className="absolute w-full h-[1px] bg-neon-cyan top-1/2 left-0"></div>
        <div className="absolute w-full h-[1px] bg-neon-cyan top-1/3 left-0"></div>
        <div className="absolute h-full w-[1px] bg-neon-cyan left-1/2 top-0"></div>
        <div className="absolute h-full w-[1px] bg-neon-cyan left-1/4 top-0"></div>
        <div className="absolute w-3 h-3 rounded-full bg-neon-cyan/30 top-1/3 left-1/4 animate-pulse"></div>
        <div className="absolute w-2 h-2 rounded-full bg-neon-purple/50 bottom-1/4 right-1/4 animate-pulse-slow"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-lg bg-cyber-dark border border-gray-700 hover:border-neon-cyan transition-all duration-500 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } cursor-pointer`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project)}
          >
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 z-10">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-cyan transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute top-0 left-0 h-full w-[1px] bg-neon-cyan transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100"></div>
            </div>
            <div className="absolute top-0 right-0 w-5 h-5 z-10">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-neon-cyan transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute top-0 right-0 h-full w-[1px] bg-neon-cyan transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-5 h-5 z-10">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-cyan transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-0 h-full w-[1px] bg-neon-cyan transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 z-10">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-neon-cyan transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 right-0 h-full w-[1px] bg-neon-cyan transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100"></div>
            </div>
            
            {/* Video or preview based on hover state */}
            <div className="aspect-video relative overflow-hidden">
              {/* Video always visible but blurred when not hovered */}
              <video 
                className={`w-full h-full object-cover absolute inset-0 transition-all duration-300 ${
                  hoveredProject === project.id ? 'blur-0 scale-105' : 'blur-sm'
                }`}
                autoPlay 
                muted 
                loop
                playsInline
                src={project.video}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Text overlay shown when NOT hovered */}
              <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-orbitron text-xl text-neon-cyan mb-2 relative inline-block">
                    {project.title}
                    <span className="absolute -bottom-1 left-0 w-1/3 h-[1px] bg-neon-cyan/50"></span>
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags with enhanced styling */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-cyber-darkBlue px-2 py-1 rounded-full text-neon-cyan border border-neon-cyan/30 relative overflow-hidden group-hover:border-neon-cyan/50 transition-colors duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="absolute inset-0 bg-neon-cyan/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}></span>
                        <span className="relative z-10">{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  {/* Links with enhanced hover effects */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-cyan transition-colors duration-300 group/link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent project click
                    >
                      <Github size={16} className="group-hover/link:animate-pulse" />
                      <span>GitHub</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan group-hover/link:w-full transition-all duration-300"></span>
                    </a>
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-purple transition-colors duration-300 group/link relative"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent project click
                      >
                        <ExternalLink size={16} className="group-hover/link:animate-pulse" />
                        <span>Live Demo</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-purple group-hover/link:w-full transition-all duration-300"></span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Many more button */}
      <div className="flex justify-end mt-8">
        <a 
          href="#" 
          className="group flex items-center gap-2 px-4 py-2 bg-cyber-dark/70 border border-neon-cyan/30 hover:border-neon-cyan rounded-md text-neon-cyan transition-all duration-300 hover:bg-cyber-dark/90"
        >
          <span>Many more...</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
      
      {/* Project Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-cyber-dark border-neon-cyan/50 max-w-3xl w-[90vw]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-orbitron text-neon-cyan">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="mt-4">
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  controls
                  playsInline
                  src={selectedProject.video}
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-cyber-darkBlue/50 px-2 py-1 rounded-full text-neon-cyan border border-neon-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-6">
                <a 
                  href={selectedProject.github} 
                  className="flex items-center gap-2 px-4 py-2 bg-cyber-dark border border-neon-cyan rounded-md text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>
                
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    className="flex items-center gap-2 px-4 py-2 bg-cyber-dark border border-neon-purple rounded-md text-neon-purple hover:bg-neon-purple/10 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>View Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

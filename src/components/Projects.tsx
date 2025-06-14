
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Mock project data
const projectsData = [
  {
    id: 1,
    title: "RAKSHA",
    description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
    video: "/videos/raksha.mp4",
    github: "#",
    demo: "#",
    tags: ["Node.js", "TensorFlow", "React.js", "Flutter"]
  },
  {
    id: 2,
    title: "VYOM ASSISTS",
    description: "Business Analytics-Based Appointment Management System for Efficient Customer Service.",
    video: "/videos/vyom.mp4",
    github: "#",
    demo: "#",
    tags: ["MERN Stack", "BERT", "YOLO"]
  },
  {
    id: 3,
    title: "INFLUENCER HUB",
    description: "An ecosystem for brands, influencers, and freelancers to connect, collaborate, and grow—powered by AI matchmaking and real-time analytics.",
    video: "/videos/infhub.mp4",
    github: "#",
    demo: "#",
    tags: ["JavaScript", "D3.js", "React"]
  },
  {
    id: 4,
    title: "LOK YATRI",
    description: "A smart travel companion connecting travelers with authentic local experiences and seamless navigation",
    video: "/videos/lokyatri.mp4",
    github: "#",
    demo: "#",
    tags: ["WebSockets", "React Native", "Flask"]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };
  
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="professional-card overflow-hidden cursor-pointer group"
            onClick={() => handleProjectClick(project)}
          >
            <div className="aspect-video relative overflow-hidden">
              <video 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                autoPlay 
                muted 
                loop
                playsInline
                src={project.video}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                
                <a 
                  href={project.demo} 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="mt-4">
              <div className="aspect-video overflow-hidden rounded-md mb-6">
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
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.github} 
                  className="professional-button-outline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
                
                <a 
                  href={selectedProject.demo} 
                  className="professional-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Mock vision projects data
const visionProjects = [
  {
    id: 1,
    title: "Object Recognition System",
    description: "Real-time object detection and classification from video streams",
    video: "/videos/vision1.mp4",
    github: "#",
    demo: "#",
    tags: ["YOLO", "Object Detection", "OpenCV", "Python"]
  },
  {
    id: 2,
    title: "Facial Expression Analyzer",
    description: "Emotion recognition from facial expressions using deep learning",
    video: "/videos/vision2.mp4",
    github: "#",
    tags: ["OpenCV", "Deep Learning", "CNN", "TensorFlow"]
  },
  {
    id: 3,
    title: "clothes detection",
    description: "Control applications using hand gestures captured via webcam",
    video: "/videos/clothesdetection.mp4",
    github: "#",
    demo: "#",
    tags: ["Mediapipe", "Computer Vision", "JavaScript"]
  },
  {
    id: 4,
    title: "Document Scanner",
    description: "Scan and digitize documents with automatic text extraction",
    video: "/videos/vision4.mp4",
    github: "#",
    tags: ["OCR", "OpenCV", "Image Processing"]
  }
];

const VisionVault: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof visionProjects[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const allTags = Array.from(new Set(visionProjects.flatMap(project => project.tags)));

  const filteredProjects = activeFilter 
    ? visionProjects.filter(project => project.tags.includes(activeFilter))
    : visionProjects;

  const handleProjectClick = (project: typeof visionProjects[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  return (
    <section id="vision-vault" className="section-container relative bg-cyber-darkBlue">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative z-10">
        <h2 className="section-title">Vision Vault</h2>
        <p className="text-neon-cyan/80 text-center mb-8 font-rajdhani">(AI-Driven Visual Analysis and Detection Projects)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-cyber-dark border border-gray-700 hover:border-neon-purple transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video relative overflow-hidden">
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

                {/* Overlay text shown when NOT hovered */}
                <div className={`absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className="font-orbitron text-xl text-neon-purple mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-cyber-dark px-2 py-1 rounded-full text-neon-cyan border border-neon-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-purple transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-cyan transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More button */}
        <div className="flex justify-end mt-8">
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2 bg-cyber-dark/70 border border-neon-purple/30 hover:border-neon-purple rounded-md text-neon-purple transition-all duration-300 hover:bg-cyber-dark/90"
          >
            <span>Many more...</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-cyber-dark border-neon-purple/50 max-w-3xl w-[90vw]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-orbitron text-neon-purple">{selectedProject?.title}</DialogTitle>
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
                  className="flex items-center gap-2 px-4 py-2 bg-cyber-dark border border-neon-purple rounded-md text-neon-purple hover:bg-neon-purple/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-cyber-dark border border-neon-cyan rounded-md text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
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

export default VisionVault;

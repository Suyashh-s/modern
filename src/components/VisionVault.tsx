
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Mock vision projects data
const visionProjects = [
  {
    id: 1,
    title: "Object Recognition System",
    description: "Real-time object detection and classification from video streams using YOLO and OpenCV",
    video: "/videos/vision1.mp4",
    github: "#",
    demo: "#",
    tags: ["YOLO", "Object Detection", "OpenCV", "Python"]
  },
  {
    id: 2,
    title: "Facial Expression Analyzer",
    description: "Emotion recognition from facial expressions using deep learning and computer vision",
    video: "/videos/vision2.mp4",
    github: "#",
    tags: ["OpenCV", "Deep Learning", "CNN", "TensorFlow"]
  },
  {
    id: 3,
    title: "Clothes Detection",
    description: "Advanced clothing detection and classification system for fashion analytics",
    video: "/videos/clothesdetection.mp4",
    github: "#",
    demo: "#",
    tags: ["Computer Vision", "Classification", "JavaScript"]
  },
  {
    id: 4,
    title: "Document Scanner",
    description: "Intelligent document scanning with automatic text extraction and processing",
    video: "/videos/vision4.mp4",
    github: "#",
    tags: ["OCR", "OpenCV", "Image Processing"]
  }
];

const VisionVault: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof visionProjects[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleProjectClick = (project: typeof visionProjects[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  return (
    <section id="vision-vault" className="section-container bg-gray-50">
      <h2 className="section-title text-center">Computer Vision Projects</h2>
      <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
        Exploring AI and computer vision technologies to solve real-world problems through intelligent visual analysis
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visionProjects.map(project => (
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

                {project.demo && (
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
                )}
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

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="professional-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
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

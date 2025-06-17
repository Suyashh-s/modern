
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Smartphone, Brain, Cloud, GitBranch } from 'lucide-react';

const CinematicSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-600" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "Flutter", level: 88, color: "from-cyan-500 to-cyan-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 92, color: "from-green-500 to-green-600" },
        { name: "Python", level: 95, color: "from-blue-500 to-yellow-500" },
        { name: "MongoDB", level: 88, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 90, color: "from-gray-600 to-gray-700" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "React Native", level: 82, color: "from-blue-500 to-purple-500" },
        { name: "Dart", level: 85, color: "from-blue-600 to-cyan-600" }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "OpenCV", level: 80, color: "from-red-500 to-red-600" },
        { name: "YOLO", level: 78, color: "from-purple-500 to-purple-600" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-container" ref={ref}>
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
          Skills & Expertise
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="cinematic-card p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-blue-600/5"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="p-3 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon size={32} className="text-primary" />
                </motion.div>
                <h3 className="text-2xl font-playfair font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    variants={itemVariants}
                    custom={skillIndex}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        variants={progressVariants}
                        custom={skill.level}
                        style={{
                          boxShadow: `0 0 20px ${skill.color.includes('blue') ? '#3b82f6' : 
                                     skill.color.includes('green') ? '#10b981' :
                                     skill.color.includes('yellow') ? '#f59e0b' :
                                     skill.color.includes('purple') ? '#8b5cf6' :
                                     skill.color.includes('red') ? '#ef4444' :
                                     skill.color.includes('orange') ? '#f97316' :
                                     skill.color.includes('cyan') ? '#06b6d4' : '#6b7280'}33`
                        }}
                      />
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional skills cloud */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-playfair font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Docker", "AWS", "Figma", "Blender", "Jupyter", 
              "PyCharm", "VS Code", "Solidity", "Web3", "Blockchain"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-muted to-muted/80 rounded-full text-sm font-medium 
                hover:from-primary/10 hover:to-blue-600/10 hover:text-primary transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicSkills;

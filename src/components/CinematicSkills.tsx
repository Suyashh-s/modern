
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';

const CinematicSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-cyan-400 to-blue-500",
      progress: 95,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      color: "from-purple-400 to-pink-500",
      progress: 90,
      skills: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "from-green-400 to-cyan-500",
      progress: 85,
      skills: ["Flutter", "Dart", "React Native", "Firebase", "REST APIs"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-orange-400 to-red-500",
      progress: 80,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      icon: Globe,
      title: "Web3 & Blockchain",
      color: "from-yellow-400 to-orange-500", 
      progress: 75,
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi", "NFTs"]
    },
    {
      icon: Zap,
      title: "DevOps & Cloud",
      color: "from-blue-400 to-purple-500",
      progress: 70,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"]
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-black" ref={ref}>
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
          What I Build With
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 text-center mb-16 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Leveraging cutting-edge technologies to build scalable, intelligent solutions that solve real-world problems
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 hover:bg-gray-900/70 hover:border-gray-700/50 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient background overlay */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Proficiency</span>
                    <span className="text-cyan-400 text-sm font-semibold">{category.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${category.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (index * 0.2) + (skillIndex * 0.1) + 0.5 
                      }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="group-hover:text-gray-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 max-w-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              These are just some of the technologies in my toolkit. I'm always learning and 
              adapting to new technologies to solve complex problems and create innovative solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicSkills;

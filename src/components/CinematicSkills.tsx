
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, Smartphone, Globe, Zap } from 'lucide-react';

const CinematicSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      progress: 95,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      progress: 90,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      progress: 85,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      progress: 80,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Blockchain & Web3",
      icon: Zap,
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"],
      progress: 75,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "DevOps & Cloud",
      icon: Code,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      progress: 70,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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
        ease: [0.25, 0.1, 0.25, 1]
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
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What I Build With
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks that power modern digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              {/* Background gradient effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-cyan-400">{category.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${category.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-between py-2 px-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-gray-600/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "rgba(34, 211, 238, 0.1)"
                      }}
                    >
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ready to collaborate? Let's build something amazing together.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicSkills;

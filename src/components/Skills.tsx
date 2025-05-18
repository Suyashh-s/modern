
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillProps {
  name: string;
  color: string;
}

const SkillTag: React.FC<SkillProps> = ({ name, color }) => {
  return (
    <span 
      className="inline-block px-3 py-1 m-1 rounded-full text-white text-sm font-orbitron transition-transform duration-300 hover:scale-105"
      style={{ 
        backgroundColor: `${color}33`, // Add transparency
        borderLeft: `3px solid ${color}`,
        boxShadow: `0 0 5px ${color}33` 
      }}
    >
      {name}
    </span>
  );
};

interface SkillIconProps {
  name: string;
  icon: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 border border-gray-700 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/5 transition-colors duration-300 group">
      <div className="text-3xl mb-2 group-hover:animate-pulse-glow">{icon}</div>
      <span className="text-xs text-gray-300">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const programming = [
    { name: 'Python', color: '#00FFFF' },
    { name: 'JavaScript', color: '#A020F0' },
    { name: 'Dart', color: '#0892d0' },
    { name: 'C++', color: '#FF10F0' },
    { name: 'Java', color: '#00FFFF' },
    { name: 'SQL', color: '#A020F0' },
    { name: 'Solidity', color: '#0892d0' },
    { name: 'Node.js', color: '#FF10F0' },
    { name: 'Express.js', color: '#00FFFF' },
    { name: 'Flutter', color: '#A020F0' },
    { name: 'React.js', color: '#0892d0' },
    { name: 'MongoDB', color: '#FF10F0' }
  ];
  
  const libraries = [
    { name: 'Python', color: '#FF10F0' },
    { name: 'JavaScript', color: '#0892d0' },
    { name: 'TypeScript', color: '#A020F0' },
    { name: 'Dart', color: '#00FFFF' },
    { name: 'C++', color: '#FF10F0' },
    { name: 'Java', color: '#0892d0' },
    { name: 'SQL', color: '#A020F0' },
    { name: 'Solidity', color: '#00FFFF' },
    { name: 'Node.js', color: '#FF10F0' },
    { name: 'Express.js', color: '#0892d0' },
    { name: 'Flutter', color: '#A020F0' },
    { name: 'React.js', color: '#00FFFF' }
  ];
  
  const tools = [
    { name: 'Git', icon: '🔄' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'PyCharm', icon: '🐍' },
    { name: 'Blender', icon: '🎮' },
    { name: 'Figma', icon: '🎨' }
  ];
  
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border relative">
          <h3 className="font-orbitron text-xl text-neon-cyan mb-6">Programming</h3>
          <div className="flex flex-wrap">
            {programming.map((skill, index) => (
              <SkillTag 
                key={index} 
                name={skill.name} 
                color={skill.color} 
              />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-sm text-neon-cyan hover:text-white flex items-center gap-1 group transition-all duration-300">
              <span className="font-orbitron">Many more</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </span>
          </div>
        </div>
        
        <div className="p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border relative">
          <h3 className="font-orbitron text-xl text-neon-purple mb-6">Libraries</h3>
          <div className="flex flex-wrap">
            {libraries.map((skill, index) => (
              <SkillTag 
                key={index} 
                name={skill.name} 
                color={skill.color} 
              />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-sm text-neon-cyan hover:text-white flex items-center gap-1 group transition-all duration-300">
              <span className="font-orbitron">Many more</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </span>
          </div>
        </div>
        
        <div className="lg:col-span-2 p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border relative">
          <h3 className="font-orbitron text-xl text-neon-blue mb-6">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {tools.map((tool, index) => (
              <SkillIcon key={index} name={tool.name} icon={tool.icon} />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-sm text-neon-cyan hover:text-white flex items-center gap-1 group transition-all duration-300">
              <span className="font-orbitron">Many more</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

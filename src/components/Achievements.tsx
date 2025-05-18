import React from 'react';
import { Trophy, Award, Medal, Star, CheckCircle2, ChevronRight } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
  position: 'left' | 'right' | 'center';
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Best ML Algorithm",
      description: "Developed a state-of-the-art machine learning algorithm that improved accuracy by 35%",
      icon: <Award className="w-10 h-10" />,
      color: "from-neon-cyan to-blue-500",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      position: "left"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Top 5% contributor to major computer vision libraries with over 50+ PRs merged",
      icon: <Star className="w-10 h-10" />,
      color: "from-neon-purple to-pink-500",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      position: "center"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "First place in the National AI Hackathon 2024 for innovative CV solution",
      icon: <Trophy className="w-10 h-10" />,
      color: "from-yellow-400 to-amber-600",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      position: "right"
    },
    {
      id: 4,
      title: "Research Publication",
      description: "Published a paper on deep learning applications in CVPR 2023",
      icon: <CheckCircle2 className="w-10 h-10" />,
      color: "from-green-400 to-emerald-600",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      position: "left"
    }
  ];

  return (
    <section id="achievements" className="section-container bg-cyber-darkBlue/50">
      <h2 className="section-title">Achievements</h2>
      
      {/* Mindmap/tree structure */}
      <div className="relative mx-auto py-12">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue transform -translate-x-1/2"></div>
        
        {/* Achievement nodes */}
        <div className="flex flex-col items-center space-y-16">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`relative flex w-full max-w-6xl items-center 
                ${achievement.position === 'right' ? 'justify-end' : 
                  achievement.position === 'left' ? 'justify-start' : 'justify-center'}`}
            >
              {/* Line connecting to central axis */}
              <div 
                className={`absolute h-1 bg-gradient-to-r ${achievement.color} top-1/2 transform -translate-y-1/2
                  ${achievement.position === 'right' ? 'left-1/2 right-[12%] -translate-x-4' : 
                    achievement.position === 'left' ? 'right-1/2 left-[12%] translate-x-4' : 
                    'left-1/4 right-1/4'}`}
              ></div>
              
              {/* Node connector circle */}
              <div 
                className={`absolute w-6 h-6 rounded-full bg-gradient-to-br ${achievement.color} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  ${achievement.position !== 'center' ? 'hidden md:block' : ''}`}
              ></div>
              
              {/* Achievement card */}
              <div 
                className={`cyber-card p-0 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/20 w-full max-w-sm
                  ${achievement.position === 'center' ? 'md:max-w-md' : 'md:max-w-sm'}
                  ${achievement.position === 'right' ? 'md:ml-auto md:mr-16' : 
                    achievement.position === 'left' ? 'md:mr-auto md:ml-16' : 'mx-auto'}`}
              >
                {/* Image part */}
                {achievement.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-70"></div>
                    
                    {/* Achievement icon floating on image */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-cyber-dark/80 backdrop-blur-sm border border-neon-cyan/30">
                      {achievement.icon}
                    </div>
                  </div>
                )}
                
                {/* Content part */}
                <div className="p-6 bg-cyber-dark/40 backdrop-blur-sm">
                  <h3 className="text-xl font-orbitron mb-2 text-white group-hover:text-neon-cyan transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                  
                  {/* Decorative circuit element */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="w-full h-full border-r-2 border-b-2 border-neon-cyan"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-neon-cyan"></div>
                    <div className="absolute bottom-8 right-3 w-2 h-2 rounded-full bg-neon-purple"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Smaller "Many more..." text at the end of the line */}
          <div className="flex justify-end w-full px-4 md:px-8 mt-4">
            <button 
              className="text-sm text-neon-cyan hover:text-white flex items-center gap-1 group transition-all duration-300 hover:scale-105"
              onClick={() => console.log("Show more achievements")}
            >
              <span className="font-orbitron transition-colors">Many more</span>
              <ChevronRight className="w-4 h-4 transition-colors group-hover:translate-x-1 duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

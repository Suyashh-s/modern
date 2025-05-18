
import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle properties
    const particleCount = 200; // Increased count for more visual impact
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulse: boolean;
      connectDistance: number; // New property for line connections
    }[] = [];
    
    // Colors for particles with more vibrant options
    const colors = [
      'rgba(0, 255, 255, ', // Cyan
      'rgba(160, 32, 240, ', // Purple
      'rgba(8, 146, 208, ', // Blue
      'rgba(255, 16, 240, ', // Pink
      'rgba(0, 200, 83, '   // Green (new)
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.6 - 0.3, // Slightly faster
        speedY: Math.random() * 0.6 - 0.3, // Slightly faster
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() > 0.5,
        connectDistance: Math.random() * 150 + 100 // Distance to connect particles
      });
    }
    
    // Draw particles
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // First pass - draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        const particle1 = particles[i];
        
        // Check for nearby particles to connect
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          // If particles are close, draw a line between them
          if (distance < particle1.connectDistance) {
            const opacity = 0.2 * (1 - distance / particle1.connectDistance); // Fade with distance
            ctx.beginPath();
            ctx.strokeStyle = `${particle1.color}${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }
      
      // Second pass - draw particles
      particles.forEach(particle => {
        if (particle.pulse) {
          particle.opacity = Math.sin(Date.now() * 0.002) * 0.2 + 0.3; // Slower pulse
        }
        
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a subtle glow effect
        ctx.shadowColor = particle.color + "1)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for next particle
        
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges with a small random change in direction
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.speedX += (Math.random() - 0.5) * 0.1; // Add slight randomization
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.speedY += (Math.random() - 0.5) * 0.1; // Add slight randomization
        }
      });
      
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none z-0 ${className || ''}`}
    />
  );
};

export default ParticleBackground;

import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import VisionVault from '../components/VisionVault';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import About from '../components/About'; // ✅ Imported About component

// Placeholder for Resume section
const Resume = () => (
  <section id="resume" className="section-container bg-cyber-darkBlue/50">
    <h2 className="section-title">Resume</h2>
    <div className="max-w-3xl mx-auto p-6 bg-cyber-dark/30 backdrop-blur-sm rounded-lg neon-border">
      <p className="text-center mb-6">View and download my full resume below.</p>
      <div className="flex justify-center">
        <a href="#" className="cyber-button">
          Download PDF Resume
        </a>
      </div>
    </div>
  </section>
);

const Index: React.FC = () => {
  // Animate skill bars on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('div[style*="width: 0%"]');
          skillBars.forEach((bar: any, index) => {
            const width = bar.dataset.width || '0';
            setTimeout(() => {
              bar.style.width = width;
            }, 100 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black font-rajdhani overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About /> {/* ✅ Using imported About component */}
      <Projects />
      <VisionVault />
      <Skills />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

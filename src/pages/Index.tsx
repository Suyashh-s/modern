
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import VisionVault from '../components/VisionVault';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import About from '../components/About';

// Placeholder for Resume section
const Resume = () => (
  <section id="resume" className="section-container">
    <h2 className="section-title text-center">Resume</h2>
    <div className="max-w-3xl mx-auto">
      <div className="professional-card p-8 text-center">
        <p className="text-muted-foreground mb-8 text-lg">
          Download my complete resume to learn more about my experience, skills, and achievements.
        </p>
        <div className="flex justify-center">
          <a href="#" className="professional-button">
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Index: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background font-inter">
      <Navbar />
      <Hero />
      <About />
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

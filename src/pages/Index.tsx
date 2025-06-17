
import React, { useEffect } from 'react';
import CinematicNavbar from '../components/CinematicNavbar';
import CinematicHero from '../components/CinematicHero';
import CinematicAbout from '../components/CinematicAbout';
import CinematicSkills from '../components/CinematicSkills';
import CinematicProjects from '../components/CinematicProjects';
import VisionVault from '../components/VisionVault';
import Achievements from '../components/Achievements';
import CinematicContact from '../components/CinematicContact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background font-inter overflow-x-hidden">
      <CinematicNavbar />
      <main>
        <section id="home">
          <CinematicHero />
        </section>
        <section id="about">
          <CinematicAbout />
        </section>
        <section id="skills">
          <CinematicSkills />
        </section>
        <section id="projects">
          <CinematicProjects />
        </section>
        <VisionVault />
        <Achievements />
        <section id="contact">
          <CinematicContact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

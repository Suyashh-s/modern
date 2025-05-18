
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Vision Vault', href: '#vision-vault' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-cyber-black/80 shadow-md shadow-neon-cyan/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="font-orbitron text-2xl font-bold neon-text">
              SuyashSawant<span className="text-neon-purple">.com</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 font-orbitron text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyber-dark"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-darkBlue/90 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md font-orbitron text-base font-medium text-gray-300 hover:text-neon-cyan hover:bg-cyber-dark/50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

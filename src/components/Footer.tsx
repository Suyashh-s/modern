
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-playfair text-2xl font-semibold mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 max-w-md mx-auto">
            Ready to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="text-sm text-gray-300 mb-4">
            © {new Date().getFullYear()} Suyash Sawant. All rights reserved.
          </div>
          
          <div className="text-sm text-gray-400">
            Designed with <span className="text-red-400">♥</span> and built with modern technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

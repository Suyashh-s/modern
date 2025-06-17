
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react';

const CinematicContact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:suyashsawant9114@gmail.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Suyashh-s',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/suyash-sawant-9a3898317/',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gray-900" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 text-center mb-16 leading-relaxed"
          variants={itemVariants}
        >
          Ready to build something extraordinary together? Let's discuss your next big idea.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl group hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} group-hover:shadow-lg transition-all duration-300`}>
                      <link.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {link.name === 'Email' ? 'suyashsawant9114@gmail.com' : `Follow me on ${link.name}`}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Currently Available</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm open to new opportunities and exciting projects. Whether you need a technical co-founder, 
                a full-stack developer, or want to discuss innovative ideas, let's connect!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicContact;

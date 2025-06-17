
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, ArrowRight } from 'lucide-react';

const CinematicContact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suyashsawant9114@gmail.com",
      href: "mailto:suyashsawant9114@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Suyashh-s",
      href: "https://github.com/Suyashh-s",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/suyash-sawant",
      href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let's create something extraordinary.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              Send a Message
            </h3>
            <p className="text-gray-400 mb-8">
              Have a project in mind? Let's discuss how we can bring it to life.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 
                  transition-all duration-300 hover:border-gray-600/50"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 
                  transition-all duration-300 hover:border-gray-600/50"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 
                  transition-all duration-300 hover:border-gray-600/50 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl px-8 py-4 
                transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 relative overflow-hidden group disabled:opacity-50"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ 
                    scale: [1, 1.05, 1],
                    transition: { duration: 0.6, repeat: Infinity }
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Get in Touch
              </h3>
              <p className="text-gray-400 mb-8">
                Choose your preferred way to connect
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={info.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-800/30 transition-colors group border border-gray-700/30 hover:border-gray-600/50"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl border border-cyan-400/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon size={24} className="text-cyan-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">
                        {info.description}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {info.value}
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 text-center"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold mb-4 text-white">
                Open to Opportunities
              </h4>
              <p className="text-gray-400 mb-6">
                Currently available for freelance projects, startup collaborations, 
                and full-time opportunities in innovative tech companies.
              </p>
              
              <motion.div
                className="flex justify-center gap-4"
                variants={containerVariants}
              >
                {[
                  { href: "https://github.com/Suyashh-s", icon: Github },
                  { href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/", icon: Linkedin },
                  { href: "mailto:suyashsawant9114@gmail.com", icon: Mail }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="p-3 bg-gray-800/50 border border-gray-700/50 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-colors group rounded-2xl"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicContact;

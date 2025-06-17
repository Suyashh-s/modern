
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const CinematicContact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suyashsawant9114@gmail.com",
      href: "mailto:suyashsawant9114@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Suyashh-s",
      href: "https://github.com/Suyashh-s"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/suyash-sawant",
      href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/"
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-muted/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title text-center glow-text"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
        </motion.p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="cinematic-card p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-playfair font-semibold mb-8 text-foreground">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                  transition-all duration-300"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                  transition-all duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                  transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-button flex items-center justify-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.div>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="cinematic-card p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-8 text-foreground">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={info.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon size={24} className="text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              className="cinematic-card p-8 text-center"
              variants={itemVariants}
            >
              <h4 className="text-xl font-playfair font-semibold mb-4 text-foreground">
                Open to Opportunities
              </h4>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
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
                    className="p-3 cinematic-card hover:bg-primary/10 transition-colors group"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
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

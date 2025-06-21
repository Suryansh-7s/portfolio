import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

interface SocialIconsProps {
  isDark: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ isDark }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const socialLinks = [
    { href: "https://linkedin.com/in/suryansh-sharmaseven", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Suryansh-7s", icon: Github, label: "GitHub" },
    { href: "https://instagram.com/suryansh.sharma7", icon: Instagram, label: "Instagram" },
  ];

  return (
    <motion.div 
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <motion.h3 
          className={`text-sm font-medium tracking-wider uppercase mb-4 sm:mb-6 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          CONNECT
        </motion.h3>
        <div className="flex justify-center items-center space-x-3 sm:space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                isDark 
                  ? "bg-gray-200/20 hover:bg-gray-200/30 text-gray-200" 
                  : "bg-gray-800/20 hover:bg-gray-800/30 text-gray-800"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialIcons;
import React from 'react';
import { motion } from 'framer-motion';

interface AboutCardProps {
  isDark: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({ isDark }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      className="h-full p-4 sm:p-6 lg:p-8 rounded-3xl glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <motion.p 
            className={`text-sm font-medium tracking-wider uppercase mb-4 sm:mb-6 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ABOUT
          </motion.p>
          <motion.h3 
            className={`text-xl sm:text-2xl lg:text-2xl font-semibold leading-relaxed mb-3 sm:mb-4 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Suryansh Sharma — Final-year B.Tech (CSE – Cyber Security & Forensics), UPES Dehradun (Graduating May 2026)
          </motion.h3>
          <motion.p 
            className={`text-base sm:text-lg lg:text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about building real-world tools for security monitoring, log analysis, and system automation. Currently a Cybersecurity Intern at Concentics, assisting in web app testing, frontend/backend testing, and occasionally contributing to design and photography. When I'm not securing networks, you can find me capturing cityscapes through my camera lens or designing something to end my boredom.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
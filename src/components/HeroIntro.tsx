import React from 'react';
import { motion } from 'framer-motion';

interface HeroIntroProps {
  isDark: boolean;
}

const HeroIntro: React.FC<HeroIntroProps> = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Suryansh</span>
            <br />
            <span className={isDark ? "text-gray-200" : "text-gray-700"}>⎯</span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className={`text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Cybersecurity enthusiast & developer, currently working at{" "}
            <span className={isDark ? "text-gray-100 font-semibold" : "text-gray-800 font-semibold"}>Concentics</span>
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}>
            Final-year B.Tech student passionate about building real-world tools for security monitoring, 
            log analysis, and system automation.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroIntro;
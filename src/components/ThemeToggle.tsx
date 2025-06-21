import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
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
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift flex items-center justify-center"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={() => setIsDark(!isDark)}
        className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl backdrop-blur-sm transition-colors duration-300 ${
          isDark 
            ? "bg-gray-200/20 hover:bg-gray-200/30" 
            : "bg-gray-800/20 hover:bg-gray-800/30"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? (
          <Sun size={20} className="sm:w-6 sm:h-6" />
        ) : (
          <Moon size={20} className="sm:w-6 sm:h-6" />
        )}
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
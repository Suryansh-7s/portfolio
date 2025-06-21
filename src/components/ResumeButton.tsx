import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface ResumeButtonProps {
  isDark: boolean;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ isDark }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const resumeUrl = "https://drive.google.com/file/d/159RrjK27rH1v5pJ2a4AOK1xYQWTWBIuj/view?usp=sharing";

  return (
    <motion.a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift flex items-center justify-center group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <motion.div
          className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl backdrop-blur-sm ${
            isDark ? "bg-gray-200/20" : "bg-gray-800/20"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} className="sm:w-5 sm:h-5" />
        </motion.div>
        <div className="text-left">
          <div className={`font-semibold text-sm sm:text-base lg:text-lg ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}>Download Resume</div>
          <div className={`text-xs sm:text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>PDF Format</div>
        </div>
      </div>
    </motion.a>
  );
};

export default ResumeButton;
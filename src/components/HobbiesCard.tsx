import React from 'react';
import { motion } from 'framer-motion';

interface HobbiesCardProps {
  isDark: boolean;
}

const HobbiesCard: React.FC<HobbiesCardProps> = ({ isDark }) => {
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
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift"
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
            HOBBIES & INTERESTS
          </motion.p>
          <motion.ul 
            className={`text-sm sm:text-base lg:text-lg leading-relaxed list-disc list-inside space-y-1 sm:space-y-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li>📸 Passionate about photography and visual storytelling.</li>
            <li>🤝 Active in social outreach and community volunteering.</li>
            <li>🔍 Exploring cybersecurity tools and participating in contests.</li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HobbiesCard; 
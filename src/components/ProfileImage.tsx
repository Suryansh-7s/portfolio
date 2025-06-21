import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  isDark: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ isDark }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const imageUrl = "https://i.ibb.co/RGx31F6F/IMG-1206.jpg";

  return (
    <motion.div 
      className="h-full rounded-3xl overflow-hidden glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-full">
        <motion.img 
          src={imageUrl} 
          alt="Suryansh Sharma"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
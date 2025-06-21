import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isDark: boolean;
  isLarge?: boolean;
  link?: string;
  techStack?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  isDark, 
  isLarge = false, 
  link, 
  techStack = [] 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const CardContent = () => (
    <div className="relative h-full group">
      <motion.img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="font-semibold text-white text-lg sm:text-xl mb-1 sm:mb-2">
            {title}
          </h3>
          {link && (
            <motion.div
              className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4 text-white" />
            </motion.div>
          )}
        </div>
        <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs rounded-full border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full rounded-3xl overflow-hidden glass hover-lift block"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02 }}
      >
        <CardContent />
      </motion.a>
    );
  }

  return (
    <motion.div 
      className="h-full rounded-3xl overflow-hidden glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <CardContent />
    </motion.div>
  );
};

export default ProjectCard;
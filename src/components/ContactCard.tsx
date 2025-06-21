import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface ContactCardProps {
  isDark: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const email = "sharmasuryansh2004@gmail.com";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <motion.div 
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6">
        <motion.h3 
          className={`text-sm font-medium tracking-wider uppercase ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          HAVE A PROJECT IN MIND?
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 sm:space-y-4"
        >
          <div className={`flex items-center justify-between p-3 sm:p-4 rounded-2xl backdrop-blur-sm border ${
            isDark 
              ? "bg-gray-200/20 border-gray-200/30" 
              : "bg-gray-800/20 border-gray-800/30"
          }`}>
            <span className={`font-medium text-sm sm:text-base truncate ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}>{email}</span>
            <motion.button
              onClick={copyEmail}
              className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-colors duration-300 flex-shrink-0 ${
                isDark 
                  ? "bg-gray-200/20 hover:bg-gray-200/30" 
                  : "bg-gray-800/20 hover:bg-gray-800/30"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <Check size={14} className="text-green-400" />
              ) : (
                <Copy size={14} className={isDark ? "text-gray-200" : "text-gray-800"} />
              )}
            </motion.button>
          </div>
          
          <div className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Let's discuss your next cybersecurity project or collaboration opportunity.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
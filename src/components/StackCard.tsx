import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Shield, 
  Monitor
} from 'lucide-react';

interface StackCardProps {
  isDark: boolean;
}

const StackCard: React.FC<StackCardProps> = ({ isDark }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "C++"],
      icon: Code2
    },
    { 
      category: "Web & APIs", 
      items: ["FastAPI", "Node.js", "EJS"],
      icon: Globe
    },
    { 
      category: "Databases", 
      items: ["MySQL", "SQLite"],
      icon: Database
    },
    { 
      category: "Cyber Tools", 
      items: ["Wireshark", "Nmap", "Nessus", "Ettercap"],
      icon: Shield
    },
    { 
      category: "Platforms", 
      items: ["VSCode", "Cursor", "VMWare"],
      icon: Monitor
    },
  ];

  return (
    <motion.div 
      className="h-full p-4 sm:p-6 rounded-3xl glass hover-lift"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-between h-full">
        <motion.h3 
          className={`text-sm font-medium tracking-wider uppercase mb-4 sm:mb-6 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          TECH STACK
        </motion.h3>
        
        <div className="space-y-3 sm:space-y-4">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              className="flex items-center space-x-2 sm:space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg backdrop-blur-sm flex items-center justify-center ${
                isDark ? "bg-gray-200/20" : "bg-gray-800/20"
              }`}>
                <category.icon size={14} className={`sm:w-4 sm:h-4 ${isDark ? "text-gray-200" : "text-gray-800"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-xs sm:text-sm font-medium mb-1 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}>{category.category}</div>
                <div className="flex flex-wrap gap-1">
                  {category.items.map((item, itemIndex) => (
                    <span 
                      key={`${category.category}-${item}`}
                      className={`px-1.5 py-0.5 sm:px-2 sm:py-1 backdrop-blur-sm text-xs rounded-full border ${
                        isDark 
                          ? "bg-gray-200/20 text-gray-200 border-gray-200/30" 
                          : "bg-gray-800/20 text-gray-800 border-gray-800/30"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StackCard;
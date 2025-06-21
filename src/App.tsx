import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroIntro from './components/HeroIntro';
import ProjectCard from './components/ProjectCard';
import SocialIcons from './components/SocialIcons';
import ProfileImage from './components/ProfileImage';
import AboutCard from './components/AboutCard';
import StackCard from './components/StackCard';
import ThemeToggle from './components/ThemeToggle';
import ContactCard from './components/ContactCard';
import ResumeButton from './components/ResumeButton';
import HobbiesCard from './components/HobbiesCard';

function App() {
  const [isDark, setIsDark] = useState(true);

  // Apply theme to body element
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <motion.div 
        className="container mx-auto px-4 py-4 sm:py-8 max-w-[1400px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          <motion.div className="lg:col-span-2">
            <HeroIntro isDark={isDark} />
          </motion.div>
          
          <motion.div className="lg:col-span-2 flex flex-col gap-4">
            <SocialIcons isDark={isDark} />
            <ResumeButton isDark={isDark} />
          </motion.div>
        </div>

        {/* Profile & Skills Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          <motion.div className="order-1 lg:order-1">
            <ProfileImage isDark={isDark} />
          </motion.div>

          <motion.div className="order-2 lg:order-2 lg:col-span-2">
            <AboutCard isDark={isDark} />
          </motion.div>

          <motion.div className="order-3 lg:order-3">
            <StackCard isDark={isDark} />
          </motion.div>
        </div>

        {/* Projects Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <motion.div>
            <ProjectCard 
              title="Mini SIEM API"
              description="A lightweight SIEM system to detect brute-force login attempts using FastAPI. Includes raw log ingestion, SQLite-based alert storage, and Swagger/ReDoc documentation."
              image="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
              link="https://github.com/Suryansh-7s/mini-siem-api"
              techStack={["Python", "FastAPI", "SQLite", "Pydantic", "Swagger"]}
              isDark={isDark}
            />
          </motion.div>
          
          <motion.div>
            <ProjectCard 
              title="NASA Turbofan RUL Prediction"
              description="Predictive maintenance system using classical ML and deep learning models to predict RUL of jet engines using NASA C-MAPSS dataset."
              image="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=800"
              link="https://github.com/Suryansh-7s/NASA-Turbofan-RUL-Prediction"
              techStack={["Python", "Machine Learning", "Deep Learning", "Jupyter"]}
              isDark={isDark}
            />
          </motion.div>
          
          <motion.div className="md:col-span-2 lg:col-span-1">
            <ProjectCard 
              title="GeoScan – Information Gathering Tool"
              description="C++ tool to scan local network devices, detect open ports, and extract geolocation-linked threat intel."
              image="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
              techStack={["C++", "CLI"]}
              isDark={isDark}
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div>
            <HobbiesCard isDark={isDark} />
          </motion.div>

          <motion.div>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </motion.div>

          <motion.div>
            <ContactCard isDark={isDark} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
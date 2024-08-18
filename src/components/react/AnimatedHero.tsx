import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FlipWords } from '../ui/FlipWords';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const AnimatedHero: React.FC = () => {
  const { t } = useTranslation();

  // Palabras para el FlipWords deben estar traducidas
  const flipWords = t('hero.flipWords', { returnObjects: true }) as string[];


  return (
    <section id="hero" className="pt-20 pb-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            {t('hero.greeting')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondaryC-light to-emerald-600 dark:from-secondaryC-dark dark:to-blue-400">Eduardo Cardoso Martinez</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-inter text-gray-700 dark:text-gray-200 mb-4">
            {t('hero.intro')} <FlipWords words={flipWords} duration={2000} className="text-secondaryC-light dark:text-secondaryC-dark font-semibold" />
          </h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 mb-8">
            {t('hero.description')}
          </p>
          
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://github.com/icabbb" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 dark:text-gray-300 hover:text-secondaryC-light dark:hover:text-secondaryC-dark transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ecardosom/" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 dark:text-gray-300 hover:text-secondaryC-light dark:hover:text-secondaryC-dark transition-colors">
              <FaLinkedin />
            </a>
            <a href="CV_EduardoC.pdf" download className="text-4xl text-gray-600 dark:text-gray-300 hover:text-secondaryC-light dark:hover:text-secondaryC-dark transition-colors">
              <HiDownload />
            </a>
          </motion.div>

          <motion.a 
            href="#contact" 
            className="dark:bg-secondaryC-dark bg-secondaryC-light text-white px-8 py-4 rounded-full hover:bg-emerald-600 dark:hover:bg-blue-600 transition-colors font-poppins font-semibold text-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.a>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="ecm.jpg"
            alt={t('hero.alt')}
            width={400}
            height={400}
            className="rounded-full border-4 border-secondaryC-light dark:border-secondaryC-dark shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;

// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
import { motion } from 'framer-motion';
import GithubProjects from './GithubProyects';
import ScrollAnimation from '../ui/scrollAnimation';
import { useTranslation } from 'react-i18next';



const githubUsername = 'icabbb';

const AnimatedProjects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200"
        >
          {t('project.title')}
        </motion.h2>
      </ScrollAnimation>
      
      <ScrollAnimation>
        <GithubProjects username={githubUsername} />
      </ScrollAnimation>
    </div>
  );
};

export default AnimatedProjects;
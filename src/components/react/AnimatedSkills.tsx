import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../ui/scrollAnimation';
import '@/styles/AnimatedSkills.css' // Asegúrate de crear este archivo CSS
import { useTranslation } from 'react-i18next';

// Define tus skills aquí
const skills = [
  { name: 'React', icon: 'react-original' },
  { name: 'JavaScript', icon: 'javascript-plain' },
  { name: 'TypeScript', icon: 'typescript-plain' },
  { name: 'HTML5', icon: 'html5-plain' },
  { name: 'CSS3', icon: 'css3-plain' },
  { name: 'Node.js', icon: 'nodejs-plain' },
  { name: 'Python', icon: 'python-plain' },
  { name: 'Git', icon: 'git-plain' },
  { name: 'NextJS', icon: 'nextjs-plain' },
  { name: 'PostgreSQL', icon: 'postgresql-plain' },
  { name: 'Supabase', icon: 'supabase-plain' },
  { name: 'Tailwind CSS', icon: 'tailwindcss-plain' },
  // Añade más skills según necesites
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const AnimatedSkills: React.FC = () => {
  const { t } = useTranslation();
    return (
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">{t('skills.title')}</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <ScrollAnimation key={skill.name} className="flex flex-col items-center">
              <motion.div
                className={`devicon-${skill.icon} colored text-6xl mb-4 skill-icon`}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={skillVariants}
              />
              <span className="text-gray-800 dark:text-gray-200 text-xl font-mono">{skill.name}</span>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    );
};

export default AnimatedSkills;

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AnimatedAbout: React.FC = () => {
  const { t } = useTranslation();

  

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          {t('about.title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-light space-y-4 font-inter"
        >
          <p>{t('about.content1')}</p>
          <p>{t('about.content2')}</p>
          <p>{t('about.content3')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedAbout;
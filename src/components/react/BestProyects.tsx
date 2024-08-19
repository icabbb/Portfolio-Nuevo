import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiOpenai, SiClerk, SiTypescript } from 'react-icons/si';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={t('featuredProject.imageAlt', { index: currentIndex + 1 })}
        className="w-full h-auto max-h-[70vh] object-contain"
      />
      <Button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label={t('featuredProject.prevImage')}
      >
        <FaChevronLeft />
      </Button>
      <Button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label={t('featuredProject.nextImage')}
      >
        <FaChevronRight />
      </Button>
      <p className="text-center mt-2">
        {t('featuredProject.imageCounter', { current: currentIndex + 1, total: images.length })}
      </p>
    </div>
  );
};

const FeaturedProject = () => {
  const { t } = useTranslation();

  const project = {
    name: t('featuredProject.name'),
    description: t('featuredProject.description'),
    imageUrl: 'ReclutAIP.png',
    demoLink: 'https://www.reclutai.xyz',
    images: [
      'ReclutAIP.png',
      'ReclutAIP2.png',
      'ReclutAIP3.png',
      'ReclutAIP4.png',
      'ReclutAIP5.png',
      'ReclutAIP6.png',
      'ReclutAIP7.png',

    ],
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30 dark:opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondaryC-light to-emerald-600 dark:from-secondaryC-dark dark:to-blue-400"
            variants={itemVariants}
          >
            {t('featuredProject.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('featuredProject.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700/50"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2 relative group"
              variants={itemVariants}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white text-lg font-semibold">{t('featuredProject.viewGallery')}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <ImageCarousel images={project.images} />
                </DialogContent>
              </Dialog>
            </motion.div>
            <motion.div 
              className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
              variants={itemVariants}
            >
              <h3 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <SiNextdotjs className="h-8 w-8 text-gray-800 dark:text-white" title="Next.js" />
                <SiTailwindcss className="h-8 w-8 text-blue-500" title="TailwindCSS" />
                <SiClerk className="h-8 w-8 text-indigo-400" title="Clerk" />
                <SiSupabase className="h-8 w-8 text-green-400" title="Supabase" />
                <SiOpenai className="h-8 w-8 text-black dark:text-white" title="OpenAI" />
                <SiTypescript className="h-8 w-8 text-blue-600" title="TypeScript" />
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-secondaryC-light to-emerald-600 dark:from-secondaryC-dark dark:to-blue-600 text-white rounded-full hover:from-emerald-600 hover:to-secondaryC-light dark:hover:from-blue-600 dark:hover:to-secondaryC-dark transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  {t('featuredProject.viewDemo')}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
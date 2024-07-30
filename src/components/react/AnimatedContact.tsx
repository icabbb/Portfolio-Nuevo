import type React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import CustomToast from '../ui/customToast';
import fetchFormspree from '@/utils/formspree';
import fetchFormSpree from '@/utils/formspree';


const AnimatedContact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetchFormSpree(formState);
      toast.custom(
        <CustomToast 
          message={t('contact.formSubmitted')} 
          icon="🎉"
        />
      );
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.custom(
        <CustomToast 
          message={t('contact.formSubmitError')} 
          icon="❌"
        />
      );
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        {t('contact.title')}
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800 dark:text-gray-200">{t('contact.name')}</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formState.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondaryC-light dark:focus:ring-secondaryC-dark" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800 dark:text-gray-200">{t('contact.email')}</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formState.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondaryC-light dark:focus:ring-secondaryC-dark" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-gray-800 dark:text-gray-200">{t('contact.message')}</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            value={formState.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondaryC-light dark:focus:ring-secondaryC-dark" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-secondaryC-light dark:bg-secondaryC-dark text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('contact.sending') : t('contact.submit')}
        </button>
      </motion.form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default AnimatedContact;
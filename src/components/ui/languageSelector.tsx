"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2 items-center">
      <button 
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded-full transition-colors duration-300 ease-in-out ${
          i18n.language === 'es' ? 'bg-secondaryC-light dark:bg-secondaryC-dark text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
        }`}
        type="button"
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full transition-colors duration-300 ease-in-out ${
          i18n.language === 'en' ? 'bg-secondaryC-light dark:bg-secondaryC-dark text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
        }`}
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;

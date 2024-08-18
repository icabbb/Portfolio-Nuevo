import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaXTwitter , FaLinkedin, FaGithub } from "react-icons/fa6";



const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-gray-800 dark:text-white transition-all duration-300 shadow-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-medium mb-4 md:mb-0">
            © {currentYear} {t('footer.copyright')}
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/icabbb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ecardosom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/icabbb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
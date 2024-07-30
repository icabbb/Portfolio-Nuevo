import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../ui/languageSelector';
import ThemeToggle from '../ui/themeToggle';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { href: "/", label: "nav.home" },
    { href: "#about", label: "nav.about" },
    { href: "#skills", label: "nav.skills" },
    { href: "#projects", label: "nav.projects" },
    { href: "#contact", label: "nav.contact" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-gray-800 dark:text-white z-50 transition-all duration-300 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold">
            ECM
          </a>
          
          {!isMobile && (
            <nav className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-emerald-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {t(item.label)}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            {isMobile && (
              // biome-ignore lint/a11y/useButtonType: <explanation>
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-white"
                aria-label="Toggle menu"
              >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  }
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <nav className="pb-4">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-sm font-medium hover:text-emerald-500 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
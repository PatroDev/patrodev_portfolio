import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X, Code } from 'lucide-react';

const Header = ({
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  mobileMenuOpen,
  setMobileMenuOpen,
  t
}) => {
  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { to: '/blog', label: t.nav.blog, isRoute: true }, // <-- Note ici
    { href: '#contact', label: t.nav.contact }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fadeInLeft">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              PatroDev
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) =>
              item.isRoute ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4 animate-fadeInRight">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="Toggle language"
            >
              {/* <Globe className="h-5 w-5" /> */}
              <img
                src={language === 'fr' ? 'src/utils/flags/fr.svg' : 'src/utils/flags/gb.svg'}
                title={language === 'fr' ? 'Français' : 'English'}
                alt={language === 'fr' ? 'Français' : 'English'}
                className=" h-5 w-5 
                            rounded-full 
                            shadow-lg 
                            ring-1 ring-gray-300 dark:ring-gray-600 
                            hover:scale-110 hover:shadow-2xl 
                            transition-transform duration-300 ease-in-out 
                            bg-white/20 backdrop-blur-md" 
              />
            </button> {language === 'fr' ? 'FR' : 'EN'}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg animate-slideDown">
            <nav className="py-4 space-y-2">
              {navItems.map((item, index) =>
                item.isRoute ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
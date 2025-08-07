import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Code, ChevronDown } from 'lucide-react';
import frFlag from '../utils/flags/fr.svg';
import gbFlag from '../utils/flags/gb.svg';

const Header = ({
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  mobileMenuOpen,
  setMobileMenuOpen,
  t
}) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { to: '/blog', label: t.nav.blog, isRoute: true },
    { href: '#contact', label: t.nav.contact }
  ];

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems
        .filter((item) => !item.isRoute)
        .map((item) => document.querySelector(item.href));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(href);
    }
  };

  const getNavItemClass = (isActive) =>
    `px-4 py-2 rounded-full transition-all duration-200 font-medium animate-fadeInUp ${
      isActive
        ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md'
        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link to="/" aria-label="Go to homepage" className="flex items-center space-x-2 animate-fadeInLeft">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">PatroDev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              if (item.isRoute) {
                return (
                  <Link
                    key={`nav-route-${index}`}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 font-medium animate-fadeInUp ${
                      location.pathname === item.to
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link to={`/${item.href}`} key={`nav-scroll-${index}`}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={getNavItemClass(activeSection === item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4 animate-fadeInRight">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 hover:scale-110"
            >
              <img
                src={language === 'fr' ? frFlag : gbFlag}
                alt={language === 'fr' ? 'Français' : 'English'}
                title={language === 'fr' ? 'Français' : 'English'}
                className="h-5 w-5 rounded-full shadow ring-1 ring-gray-300 dark:ring-gray-600 bg-white/20 backdrop-blur-md transition-transform duration-300 ease-in-out"
              />
            </button>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {language.toUpperCase()}
            </span>

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 hover:scale-110"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 hover:scale-110"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg animate-slideDown">
            <nav className="py-4 space-y-2">
              {navItems.map((item, index) => {
                if (item.isRoute) {
                  return (
                    <Link
                      key={`mobile-nav-route-${index}`}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-center w-full ${getNavItemClass(location.pathname === item.to)}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <Link to={`/${item.href}`} key={`mobile-nav-scroll-${index}`}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-center ${getNavItemClass(activeSection === item.href)}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </button>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

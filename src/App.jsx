import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './utils/translations';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');
  const t = translations[language];

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        {/* ✅ Header DOIT être dans le Router */}
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          t={t}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero t={t} />
                  <About t={t} />
                  <Skills t={t} />
                  <Experience t={t} />
                  <Education t={t} />
                  <Contact t={t} />
                </main>
                <Footer t={t} />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div className="py-52 bg-red-300 text-center font-bold text-red-500">404 – Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

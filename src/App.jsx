import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToSection from './components/ScrollToSection';
import { motion, useScroll } from "framer-motion"
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
  
    const { scrollYProgress } = useScroll()
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
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ffcc00",
          zIndex: 1000,
          transition: { duration: 0.2 }
        }}
      />
      <Router>
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gray-100'}`}>
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

              {/* Route spéciale pour rediriger vers une section */}
            <Route path="/go/:sectionId" element={<ScrollToSection />} />
            <Route path="*" element={<div className="py-52 bg-red-300 text-center font-bold text-red-500">404 – Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

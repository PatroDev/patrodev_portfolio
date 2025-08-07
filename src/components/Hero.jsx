import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, ChevronDown } from 'lucide-react';

const Hero = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-gray-900 dark:via-slate-600 dark:to-gray-900 pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray-300/[0.05] bg-[size:20px_20px] animate-fadeIn"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <div title='Disponible pour freelance' className={`mb-8 flex justify-center transition-all duration-1000 ${isVisible ? 'animate-scaleIn' : 'opacity-0 scale-50'}`}>
          <div className="relative group">
            <div className="w-40 h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 animate-glow">
              <img src='/icon.png' alt='PatroDev' className='text-sm rounded-full absolute w-[50%] h-[50%] object-cover'/><span className='relative mt-8 ml-24 -bottom-1 -right-1'>Patro</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 animate-bounce-slow">
              Dev
            </div>
            {/* Floating particles */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -right-8 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className={`space-y-2 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideUp' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-snug">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-fuchsia-600 to-blue-600 drop-shadow-sm">
                Patrice
              </span>
              <br />
              <span className="uppercase tracking-wider text-gray-700 dark:text-gray-300 italic font-light">
                COMPAORE
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium animate-pulse-text">
              {t.hero.title}
            </p>
          </div>

          <p className={`text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            {t.hero.description}
          </p>

          {/* Location */}
          <div className={`flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <MapPin className="h-5 w-5 mr-2 animate-bounce-gentle" />
            <span>Marrakech, Morocco</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <button onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/my-cv.pdf'; // chemin relatif depuis le dossier public
                      link.download = 'PatroDev-CV.pdf'; // nom du fichier lors du téléchargement
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }} 
                    className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-glow-button">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>{t.hero.downloadCV}</span>
            </button>
            <a
              href="#contact"
              className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="group-hover:animate-pulse">{t.hero.contactMe}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 pt-8 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Github, href: 'https://github.com/PatroDev/patrodev_portfolio.git', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/patrodev', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-label={social.label}
                rel="noopener noreferrer"
                target="_blank"
                onClick={social.href === '#contact' ? (e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                <social.icon className="h-6 w-6 group-hover:animate-bounce" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400">
            <span className="text-sm font-medium animate-pulse">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import { Users, Lightbulb, Target, Code2, Award, Zap } from 'lucide-react';

const About = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: t.about.features.fullstack.title,
      description: t.about.features.fullstack.description,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t.about.features.performance.title,
      description: t.about.features.performance.description,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t.about.features.collaboration.title,
      description: t.about.features.collaboration.description,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t.about.features.innovation.title,
      description: t.about.features.innovation.description,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '6+', label: 'Grands Projets Réalisés', icon: <Award className="h-6 w-6" /> },
    { number: '10+', label: 'Technologies', icon: <Code2 className="h-6 w-6" /> },
    { number: '2+', label: 'Années Formation', icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-accent-300 border-zinc-500 rounded-full dark:bg-amber-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-2 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-counter">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'}`}>
            <div className="prose prose-lg dark:prose-dark">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 animate-fadeIn">
                {t.about.description1}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                {t.about.description2}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                {t.about.description3}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['MERN Stack', 'Laravel', 'React', 'Node.js', 'MongoDB', 'MySQL'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6  bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
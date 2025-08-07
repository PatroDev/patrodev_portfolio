import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Settings, Palette, Users, Star, TrendingUp, Zap, Award } from 'lucide-react';

const Skills = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: t.skills.categories.frameworks.title,
      skills: [
        { name: 'Laravel', level: 90, icon: '🚀' },
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚄' },
        { name: 'Bootstrap', level: 90, icon: '🎨' },
        { name: 'Laravel-Native', level: 70, icon: '📱' }
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t.skills.categories.languages.title,
      skills: [
        { name: 'PHP', level: 90, icon: '🐘' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' }
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: t.skills.categories.databases.title,
      skills: [
        { name: 'MySQL', level: 85, icon: '🗄️' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'PyMongo', level: 75, icon: '🐍' }
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: t.skills.categories.cms.title,
      skills: [
        { name: 'WordPress', level: 80, icon: '📝' },
        { name: 'Joomla', level: 70, icon: '🏗️' }
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: t.skills.categories.tools.title,
      skills: [
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Git', level: 85, icon: '📚' },
        { name: 'GitHub', level: 85, icon: '🐙' },
        { name: 'UML', level: 80, icon: '📊' },
        { name: 'MCD/MLD', level: 85, icon: '🗂️' },
        { name: 'Canva', level: 90, icon: '🎨' },
        { name: 'Excel', level: 85, icon: '📈' }
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t.skills.categories.other.title,
      skills: [
        { name: 'Agile (SCRUM)', level: 80, icon: '🔄' },
        { name: 'DevOps', level: 70, icon: '⚙️' },
        { name: 'Responsive Design', level: 90, icon: '📱' },
        { name: 'Team Collaboration', level: 85, icon: '🤝' }
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20'
    }
  ];

  const SkillBar = ({ skill, index, categoryColor }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
              {animatedLevel}%
            </span>
            {skill.level >= 85 && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
          </div>
        </div>
        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-y-110`}
            style={{ 
              width: `${animatedLevel}%`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 animate-bounce" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
            <TrendingUp className="h-8 w-8 text-teal-600 dark:text-teal-400 ml-3 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className={activeCategory === index ? 'animate-bounce' : ''}>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <div className={`bg-gradient-to-br ${skillCategories[activeCategory].bgColor} rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 backdrop-blur-sm`}>
            <div className="flex items-center justify-center mb-8">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center text-white shadow-2xl animate-glow`}>
                {skillCategories[activeCategory].icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {skillCategories[activeCategory].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${skillIndex * 0.1}s` }}
                >
                  <SkillBar 
                    skill={skill} 
                    index={skillIndex} 
                    categoryColor={skillCategories[activeCategory].color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-yellow-500 mr-3 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Expertise Highlights
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Frontend', value: '90%', icon: '🎨' },
                { label: 'Backend', value: '85%', icon: '⚙️' },
                { label: 'Database', value: '80%', icon: '🗄️' },
                { label: 'DevOps', value: '75%', icon: '🚀' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Calendar, MapPin, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Experience = ({ t }) => {
  const experiences = [
    {
      id: 'rh-app',
      title: t.experience.projects.rhApp.title,
      company: 'MARJANE HOLDING',
      location: 'Laâyoune',
      period: t.experience.projects.rhApp.period,
      technologies: ['Laravel', 'React', 'MySQL', 'NativePHP', 'Electron'],
      description: t.experience.projects.rhApp.description,
      achievements: t.experience.projects.rhApp.achievements,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'banking-app',
      title: t.experience.projects.bankingApp.title,
      company: t.experience.projects.bankingApp.company,
      location: '',
      period: t.experience.projects.bankingApp.period,
      technologies: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Bootstrap'],
      description: t.experience.projects.bankingApp.description,
      achievements: t.experience.projects.bankingApp.achievements,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'purchase-platform',
      title: t.experience.projects.purchasePlatform.title,
      company: 'PIXWELL AGENCY',
      location: 'Laâyoune (Remote)',
      period: t.experience.projects.purchasePlatform.period,
      technologies: ['Laravel', 'MySQL', 'React', 'Bootstrap'],
      description: t.experience.projects.purchasePlatform.description,
      achievements: t.experience.projects.purchasePlatform.achievements,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'icpe-website',
      title: t.experience.projects.icpeWebsite.title,
      company: 'ICPE ORGANIZATION',
      location: 'Liberia',
      period: t.experience.projects.icpeWebsite.period,
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      description: t.experience.projects.icpeWebsite.description,
      achievements: t.experience.projects.icpeWebsite.achievements,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Header Info */}
                <div className="lg:col-span-1">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${exp.color} mb-4`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      {t.experience.technologies}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t.experience.description}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t.experience.achievements}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
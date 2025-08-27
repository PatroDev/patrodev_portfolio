import React from 'react';
import {
  Calendar,
  MapPin,
  ExternalLink,
  Code
} from 'lucide-react';

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
      image: '/projects/rh-app.png',
      demoLink: 'https://github.com/PatroDev/GestionCV_Marjane_LSH.git',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'banking-app',
      title: t.experience.projects.bankingApp.title,
      company: t.experience.projects.bankingApp.company,
      location: 'Etablissement CMC - Laâyoune Sakia El Hamra',
      period: t.experience.projects.bankingApp.period,
      technologies: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Bootstrap'],
      description: t.experience.projects.bankingApp.description,
      achievements: t.experience.projects.bankingApp.achievements,
      image: '/projects/banking-app.png',
      demoLink: 'https://github.com/PatroDev/NeoBank_WebApp.git',
      color: 'from-green-500 to-green-700'
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
      image: '/projects/purchase-platform.png',
      demoLink: 'https://github.com/PatroDev/gestion_achats.git',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'icpe-website',
      title: t.experience.projects.icpeWebsite.title,
      company: 'ICPE (Initiative for Children Protection and Empowerment) - Non-Profit Organization',
      location: 'Liberia',
      period: t.experience.projects.icpeWebsite.period,
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      description: t.experience.projects.icpeWebsite.description,
      achievements: t.experience.projects.icpeWebsite.achievements,
      image: '/projects/icpe-website.png',
      demoLink: 'https://icpe-website.vercel.app',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'aebm-laayoune',
      title: t.experience.projects.aebmlaayoune.title,
      company: 'AEBM LAÂYOUNE',
      location: 'Laâyoune',
      period: t.experience.projects.aebmlaayoune.period,
      technologies: ['Vite', 'React', 'Typescript', 'TailwindCSS', 'framer-motion', 'lucide-react'],
      description: t.experience.projects.aebmlaayoune.description,
      achievements: t.experience.projects.aebmlaayoune.achievements,
      image: '/projects/aebm-laayoune.png',
      demoLink: 'https://aebm-laayoune.vercel.app',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'decor-site',
      title: t.experience.projects.decorsite.title,
      company: 'PROJECT BONOUR 2J DECOR',
      location: 'Burkina Faso (Remote)',
      period: t.experience.projects.decorsite.period,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'React', 'vite', 'framer-motion', 'lucide-react'],
      description: t.experience.projects.decorsite.description,
      achievements: t.experience.projects.decorsite.achievements,
      image: '/projects/decor-site.png',
      demoLink: 'https://decor-site-major.vercel.app',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'bini-portfolio',
      title: t.experience.projects.biniportfolio.title,
      company: 'BINI PORTFOLIO',
      location: 'Marrakech, Morocco',
      period: t.experience.projects.biniportfolio.period,
      technologies: ['TailwindCSS', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'React', 'framer-motion', 'lucide-react'],
      description: t.experience.projects.biniportfolio.description,
      achievements: t.experience.projects.biniportfolio.achievements,
      image: '/projects/bini-portfolio.png',
      demoLink: 'https://bini-a-portfolio.vercel.app',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-stone-300 dark:bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative w-full md:w-[45%] lg:w-[30%] bg-gradient-to-br dark:from-gray-800 from-white to-stone-200 dark:to-gray-900 rounded-t-3xl overflow-auto shadow-xl hover:scale-[1.015] transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className='mb-6 relative'>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-48 w-full p-3 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                />

                {/* Légende en bas de l'image */}
                <div className="absolute w-full bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-2 flex justify-between items-center">
                  {/* <span className="text-sm font-medium">{exp.title}</span> */}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // pour éviter les conflits avec le clic sur la carte
                      window.open(exp.image, '_blank', 'noopener,noreferrer');
                    }}
                    className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full hover:bg-white/40 transition"
                  >
                    Voir
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${exp.color}`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>

                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    {exp.company}
                  </div>
                  {exp.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t.experience.technologies}:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <a
                  href={exp.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-teal-500 px-4 py-2 rounded-full hover:from-sky-700 hover:to-teal-600 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.experience.viewDemo || 'Voir le projet'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

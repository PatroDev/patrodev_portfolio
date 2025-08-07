import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = ({ t }) => {
  const education = [
    {
      degree: t.education.specialist.degree,
      institution: t.education.specialist.institution,
      location: 'Laâyoune, Morocco',
      period: '2023-2025',
      description: t.education.specialist.description,
      color: 'from-blue-500 to-blue-600'
    },
    {
      degree: t.education.baccalaureate.degree,
      institution: t.education.baccalaureate.institution,
      location: 'Burkina Faso',
      period: '2021-2022',
      description: t.education.baccalaureate.description,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white mb-6`}>
                <GraduationCap className="h-8 w-8" />
              </div>

              <div className="space-y-4">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${edu.color}`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.period}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {edu.degree}
                </h3>

                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.education.additionalTitle}
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                t.education.additional.agile,
                t.education.additional.git,
                t.education.additional.responsive,
                t.education.additional.databases
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    <Award className="h-6 w-6 mx-auto" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      school: 'Vellore Institute of Technology (VIT), Bhopal',
      specialization: 'Cloud Computing and Automation',
      year: 'Expected May 2026',
      score: 'CGPA: 9.05/10',
      courses: [
        'Cloud Computing',
        'Automation',
        'Database Management Systems',
        'Computer Networks',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
      ],
    },
    {
      degree: 'Senior Secondary Certificate Examination (Class XII)',
      school: 'Macro Vision School, Burhanpur',
      specialization: 'CBSE',
      year: 'July 2022',
      score: 'CBSE Cumulative: 80.2%',
      courses: [],
    },
    {
      degree: 'Secondary Certificate Examination (Class X)',
      school: 'Bhandari Public School, Khandwa',
      specialization: 'CBSE',
      year: 'July 2020',
      score: 'CBSE Cumulative: 85.8%',
      courses: [],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cream to-white dark:from-navy dark:to-navy/80 p-8 rounded-2xl shadow-xl border-t-4 border-maroon"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-maroon/10 dark:bg-slate/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-maroon dark:text-slate" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy dark:text-cream mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-maroon dark:text-slate font-medium mb-2">
                    {edu.school}
                  </p>
                  {edu.specialization && (
                    <p className="text-sm text-navy/70 dark:text-cream/70 mb-4">
                      Specialization: {edu.specialization}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-navy/70 dark:text-cream/70">
                        {index === 0 ? 'Expected Graduation' : 'Completion Year'}:
                      </span>
                      <span className="font-semibold text-navy dark:text-cream">
                        {edu.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-navy/70 dark:text-cream/70">Score:</span>
                      <span className="font-semibold text-maroon dark:text-slate">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {edu.courses.length > 0 && (
                    <div className="bg-white dark:bg-navy-light p-6 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-maroon dark:text-slate" />
                        <h4 className="font-bold text-navy dark:text-cream">
                          Relevant Coursework
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-maroon/10 dark:bg-slate/10 text-maroon dark:text-slate text-sm font-medium rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

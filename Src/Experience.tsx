import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Event Lead',
      organization: 'FeedBox Club',
      period: '2024 - 2025',
      description: [
        'Led and coordinated multiple technical and non-technical events',
        'Managed team of volunteers and ensured smooth event execution',
        'Collaborated with sponsors and handled logistics',
        'Increased club engagement and participation',
      ],
    },
    {
      role: 'Event & Anchoring Lead',
      organization: 'E-Cell, VIT Bhopal',
      period: '2023 – 2024',
      description: [
        'Led the anchoring and hosting team, managing stage presence and event flow for college-wide activities',
        'Coordinated with multiple batches (2019–2023) and departments to ensure smooth execution of events',
        'Contributed to organizing large-scale initiatives with strong collaboration and leadership',
        'Enhanced audience engagement through professional hosting and dynamic stage management',
      ],
    },
    
    {
      role: 'Technical Team Member',
      organization: 'MUN Club',
      period: '2023 - 2025',
      description: [
        'Contributed to website design and development for MUN Club',
        'Managed technical aspects of Model UN conferences',
        'Collaborated with design team for event materials',
        'Provided technical support during events',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-maroon dark:bg-slate hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-maroon dark:bg-slate flex-shrink-0 relative z-10">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 bg-white dark:bg-navy-light p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-navy dark:text-cream">
                            {exp.role}
                          </h3>
                          <p className="text-maroon dark:text-slate font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <span className="text-sm text-navy/70 dark:text-cream/70 mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-navy/70 dark:text-cream/70 flex items-start"
                          >
                            <span className="text-maroon dark:text-slate mr-2">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;

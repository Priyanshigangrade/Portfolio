import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Mantra Collab',
      subtitle: 'AI Content Creator Web Application | Generative AI + Cloud',
      period: '2024 - Present',
      description:
        'Mantra Collab is a cloud-based Generative AI platform designed to automate script writing and short-form video creation using Large Language Models and scalable cloud infrastructure.',
      tech: ['Next.js', 'AWS (S3, ECS, ECR, EC2, Lambda)', 'Docker', 'REST APIs', 'LLMs (ChatGPT, Gemini, Veo)'],
      highlights: [
        'Designed and developed a scalable cloud-native GenAI platform for automated shot-wise content and video generation',
        'Integrated multiple Large Language Models (LLMs) to generate structured scripts, scene breakdowns, and creative content dynamically',
        'Built secure authentication, user management, and API key management modules for platform control and scalability',
        'Implemented a JSON-driven video pipeline with storyboard export functionality (PDF/JPG), improving workflow automation',
        'Reduced overall content creation time by approximately 40% through structured automation and reusable templates',
      ],
      link: null,
      image: '/mantra-collab.png', // Add your image to public folder
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy-light rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-slate/20 dark:border-slate/10"
            >
              <div className="flex gap-12 items-stretch">
                {/* Description Section - Left Half */}
                <div className="w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-navy dark:text-cream mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-maroon dark:text-slate font-semibold text-lg mb-2">
                    {exp.subtitle}
                  </p>
                  <p className="text-sm text-navy/70 dark:text-cream/70 mb-6">
                    {exp.period}
                  </p>
                  <p className="text-navy/70 dark:text-cream/70 mb-6 text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-maroon/10 dark:bg-slate/10 text-maroon dark:text-slate text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-bold text-navy dark:text-cream mb-4">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-navy/70 dark:text-cream/70 flex items-start gap-2 text-sm"
                      >
                        <span className="text-maroon dark:text-slate font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <div className="flex gap-4">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon/90 text-white rounded-lg font-medium transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Section - Right Half */}
                <div className="w-1/2">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    {exp.image ? (
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover object-left min-h-96"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-maroon/20 to-slate/20 dark:from-maroon/30 dark:to-slate/30 flex items-center justify-center min-h-96">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-maroon/30 dark:text-slate/30 mb-2">
                            {index + 1}
                          </div>
                          <p className="text-navy/40 dark:text-cream/40 text-sm">
                            Project Visual
                          </p>
                        </div>
                      </div>
                    )}
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

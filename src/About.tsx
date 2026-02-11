import { GraduationCap, Code, Brain, Cloud, Database, Wrench } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      icon: Code,
      category: 'Programming',
      skills: ['Python', 'Java', 'HTML', 'CSS'],
    },
    {
      icon: Brain,
      category: 'AI/ML',
      skills: ['Machine Learning', 'Computer Vision'],
    },
    {
      icon: Cloud,
      category: 'Cloud & DevOps',
      skills: ['AWS (S3, ECS, ECR)', 'Docker', 'CI/CD', 'Agile Methodologies (Scrum)'],
    },
    {
      icon: Database,
      category: 'Databases',
      skills: ['SQL', 'NoSQL'],
    },
    {
      icon: Wrench,
      category: 'Tools',
      skills: ['Git/GitHub', 'Kafka', 'Postman'],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-cream to-slate/20 dark:from-navy dark:to-navy/50 p-8 rounded-2xl shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-12 h-12 text-maroon dark:text-slate flex-shrink-0" />
              <div className="space-y-4 text-navy/80 dark:text-cream/80 text-lg leading-relaxed">
                <p>
                  I am a B.Tech Computer Science Engineering student at VIT Bhopal
                  with a strong academic record (CGPA: 9.07), expected to graduate
                  in May 2026.
                </p>
                <p>
                  My passion lies in software engineering, AI/ML, and cloud systems,
                  where I strive to build scalable, efficient, and innovative
                  solutions.
                </p>
                <p>
                  With strong proficiency in Python, Java, AWS, and DevOps tools, I
                  have hands-on experience in developing containerized applications,
                  implementing CI/CD pipelines, and leveraging cloud technologies.
                </p>
                <p>
                  I am actively seeking opportunities as a Software Development
                  Engineer, Cloud Engineer, or AI/ML Engineer to contribute my
                  skills and grow in a dynamic environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-navy dark:text-cream mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-navy-light p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg">
                      <Icon className="w-6 h-6 text-maroon dark:text-slate" />
                    </div>
                    <h4 className="text-xl font-bold text-navy dark:text-cream">
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-maroon/10 dark:bg-slate/10 text-maroon dark:text-slate rounded-full text-sm font-medium hover:bg-maroon hover:text-white dark:hover:bg-slate dark:hover:text-navy transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

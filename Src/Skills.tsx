import { Code, Brain, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
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
    <section className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

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
                  <h3 className="text-xl font-bold text-navy dark:text-cream">
                    {category.category}
                  </h3>
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
    </section>
  );
};

export default Skills;

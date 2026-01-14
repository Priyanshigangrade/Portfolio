import { Trophy, FileText, Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 10 Finalist',
      subtitle: 'Arthneeti - IIM Nagpur',
      description:
        'Selected among top 10 finalists in prestigious business case competition',
    },
    {
      icon: FileText,
      title: 'IEEE Research Paper',
      subtitle: 'Edge/Fog Computing',
      description:
        'Published research paper on Edge and Fog Computing technologies in IEEE conference',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      subtitle: 'CGPA 9.05/10',
      description:
        'Maintained outstanding academic performance throughout B.Tech program',
    },
  ];

  const certifications = [
    {
      title: 'Python Essentials',
      issuer: 'Vityarthi',
      description: 'Core Python programming concepts and essentials',
      certificateLink: 'https://drive.google.com/file/d/1qi6RsE70vCw85B_OsRFpdlK5jzIgd1RD/view?usp=drive_link',
    },
    {
      title: 'HTML, CSS, and JavaScript for Web Developers',
      issuer: 'Coursera (Johns Hopkins University)',
      description: 'Web development fundamentals covering HTML, CSS and JavaScript',
      certificateLink: 'https://drive.google.com/file/d/1TyyJiisYE1VHKvEyc0AM6ZgZcAE4f77n/view?usp=sharing',
    },
    {
      title: 'AWS Solutions Architect – Associate Certification Program',
      issuer: 'Ethnus / AWS Partner Training',
      description: 'Preparation program for AWS Solutions Architect Associate topics',
      certificateLink: 'https://drive.google.com/file/d/1bIvEiZt8CuljcRkdlCsNhan9mtRbSVgp/view?usp=drive_link',
    },
    {
      title: 'DevOps Fundamentals',
      issuer: 'IBM Career Education Program',
      description: 'Introductory DevOps practices, CI/CD and automation concepts',
      certificateLink: 'https://drive.google.com/file/d/1POS8bk9PKqeGf3zIWIirEvRINGhCq1q8/view?usp=drive_link',
    },
    {
      title: 'DevOps, Agile & Design Thinking',
      issuer: 'IBM Career Education Program',
      description: 'Combined training on DevOps, Agile methodologies and design thinking',
      certificateLink: 'https://drive.google.com/file/d/1UQx2TbpSeO9NvGgm_lTJ-uKeVaGQpDu-/view?usp=drive_link',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle University',
      description: 'Foundational knowledge of Oracle Cloud Infrastructure',
      certificateLink: 'https://drive.google.com/file/d/1xL1vfbKPGVJgM9ITj5VanFwhyjuEv0A1/view?usp=sharing',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle University',
      description: 'Foundations of AI on Oracle Cloud',
      certificateLink: 'https://drive.google.com/file/d/1C9iaHVIT3940YPokXMmgAQae3_Tk8eUb/view?usp=sharing',
    },
    {
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      issuer: 'Oracle University',
      description: 'Fundamentals of Oracle Data Platform',
      certificateLink: 'https://drive.google.com/file/d/1PyxX0q0xhdqJrPW7kw_2rG2es092AMd5/view?usp=sharing',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle University',
      description: 'Generative AI concepts and Oracle Cloud integrations',
      certificateLink: 'https://drive.google.com/file/d/1fWidRs0YpJfOs7GrKYeSP8m6EtgoV_GS/view?usp=sharing',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy dark:text-cream mb-8 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cream to-white dark:from-navy dark:to-navy/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-l-4 border-maroon"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-maroon/10 dark:bg-slate/10 rounded-full mb-4">
                      <Icon className="w-10 h-10 text-maroon dark:text-slate" />
                    </div>
                    <h3 className="text-xl font-bold text-navy dark:text-cream mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-maroon dark:text-slate font-medium mb-3">
                      {achievement.subtitle}
                    </p>
                    <p className="text-navy/70 dark:text-cream/70 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-navy dark:text-cream mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-light p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg flex-shrink-0">
                    <Award className="w-8 h-8 text-maroon dark:text-slate" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-cream mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-maroon dark:text-slate font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-navy/70 dark:text-cream/70 mb-4">
                      {cert.description}
                    </p>
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1 bg-maroon hover:bg-maroon/90 text-white text-xs font-medium rounded transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

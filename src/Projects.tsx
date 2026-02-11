import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ReturnShield.AI',
      description:
        'ReturnShield.AI is an AI-based fraud detection system that verifies whether a returned e-commerce product is genuine or suspicious using image recognition.',
      tech: ['Python', 'Deep Learning', 'MobileNetV2', 'TensorFlow.js', 'Computer Vision'],
      highlights: [
        'Designed an automated return verification flow using 3 labeled images (front, back, close-up) captured at dispatch and return time for accurate matching.',
        'Built and trained a deep learning model using MobileNetV2 + custom CNN layers to detect visual differences like texture, logo alignment, shape, and color tone.',
        'Implemented browser-based inference using TensorFlow.js, enabling fast and privacy-friendly verification without uploading images to servers.',
        'Added multi-language (11 languages) voice interaction to make the system accessible for warehouse and delivery staff.',
        'Achieved ~85% reduction in fraudulent return cases during testing.',
      ],
      github: 'https://github.com/Priyanshigangrade',
      demo: null,
      image: '/returnshield.png',
    },
    {
      title: 'Nexus Cloud',
      description:
        'Nexus Cloud is a DevOps + Cloud automation project that speeds up web application deployment and improves monitoring using containerization and real-time logging.',
      tech: ['AWS (ECS, ECR, S3)', 'Docker', 'CI/CD', 'Apache Kafka', 'Monitoring'],
      highlights: [
        'Built an automated deployment pipeline using Docker + AWS ECS + AWS ECR, ensuring consistent deployments across environments.',
        'Reduced deployment time by ~60% by automating container build, image push, and ECS rollout processes.',
        'Hosted secure and cost-efficient static websites on Amazon S3, including reverse proxy–based routing to support multiple domains.',
        'Integrated Apache Kafka with monitoring/visualization tools to create a centralized dashboard, eliminating ~90% manual log reviews.',
      ],
      github: 'https://github.com/Priyanshigangrade',
      demo: null,
      image: '/nexus-cloud.png',
    },
    {
      title: 'Smart Irrigation System',
      description:
        'Smart Irrigation System is an IoT + Machine Learning project that automates irrigation decisions using real-time sensor data to save water and reduce manual effort in farming.',
      tech: ['Python', 'Arduino UNO', 'IoT Sensors', 'pyserial', 'scikit-learn (Decision Tree)'],
      highlights: [
        'Built a real-time irrigation automation system using soil moisture, temperature, and humidity sensors connected to Arduino UNO.',
        'Implemented serial communication between Arduino and Python using pyserial, enabling continuous sensor-data processing.',
        'Trained a Decision Tree model (scikit-learn) to predict irrigation needs and automatically control a pump using a relay module.',
        'Achieved ~90% prediction accuracy and observed 25–30% water savings compared to traditional/manual irrigation.',
        'Improved reliability by fixing sensor noise and data sync issues using markers, delays, and averaging techniques.',
      ],
      github: 'https://github.com/Priyanshigangrade',
      demo: null,
      image: '/smart-irrigation.png',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy-light rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-slate/20 dark:border-slate/10"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                {/* Description Section - Left Half */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-navy dark:text-cream mb-4">
                    {project.title}
                  </h3>
                  <p className="text-navy/70 dark:text-cream/70 mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
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
                    {project.highlights.map((highlight, highlightIndex) => (
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

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon/90 text-white rounded-lg font-medium transition-all hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy dark:bg-slate hover:bg-navy/90 dark:hover:bg-slate/90 text-white rounded-lg font-medium transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Section - Right Half */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center min-h-96"
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

export default Projects;

import { Download, Mail, Github, Linkedin, Code } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-cream via-white to-slate/20 dark:from-navy dark:via-navy-light dark:to-slate/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-maroon dark:text-slate text-lg font-medium">
                Hi, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-cream">
                Priyanshi Gangrade
              </h1>
              <div className="text-xl md:text-2xl text-navy/80 dark:text-cream/80 font-medium space-y-1">
                <p>B.Tech CSE | Software Engineer</p>
                <p>AI/ML | Cloud & DevOps</p>
              </div>
            </div>

            <p className="text-lg text-navy/70 dark:text-cream/70 max-w-2xl">
              Fresher actively seeking SDE / Cloud / AI roles. Skilled in Python,
              Java, AWS, DevOps, SQL/NoSQL & Kafka.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-navy-light rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-maroon dark:text-slate" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-navy-light rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-maroon dark:text-slate" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-navy-light rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="LeetCode"
              >
                <Code className="w-6 h-6 text-maroon dark:text-slate" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-maroon to-slate rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-104 h-40 md:w-100 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-navy-light shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-maroon/20 to-slate/20 flex items-center justify-center">
                  {/* Show profile image from public folder if available; fallback to initials */}
                  {/** Place your photo at `public/profile.jpg` **/}
                  <ProfileImageFallback />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImageFallback = () => {
  const [showImage, setShowImage] = useState(true);

  return (
    <>
      {showImage ? (
        // Try to load image from `public/profile.jpg`. If it fails, hide image and show initials.
        <img
          src="/profile.jpg"
          alt="Priyanshi Gangrade"
          className="w-full h-full object-cover"
          onError={() => setShowImage(false)}
        />
      ) : (
        <div className="text-8xl md:text-10xl font-bold text-maroon dark:text-slate">
          PG
        </div>
      )}
    </>
  );
};
export default Hero;

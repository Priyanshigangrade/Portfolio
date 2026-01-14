import { Download, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-20 bg-cream dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-navy-light p-8 rounded-2xl shadow-xl text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-maroon/10 dark:bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-12 h-12 text-maroon dark:text-slate" />
              </div>
              <h3 className="text-2xl font-bold text-navy dark:text-cream mb-2">
                Download My Resume
              </h3>
              <p className="text-navy/70 dark:text-cream/70">
                Get a detailed overview of my skills, experience, and education
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy dark:bg-slate hover:bg-navy/90 dark:hover:bg-slate/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

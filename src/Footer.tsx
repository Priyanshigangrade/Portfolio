import { Heart, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy dark:bg-navy/95 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-cream">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-maroon fill-maroon" />
            <span>by Priyanshi Gangrade</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate/20 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate/20 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate" />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate/20 rounded-lg transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5 text-slate" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

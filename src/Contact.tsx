import { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-navy dark:text-cream mb-6">
              Let's Connect
            </h3>
            <p className="text-navy/70 dark:text-cream/70 mb-8">
              I'm currently open to internships and full-time opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg">
                  <Mail className="w-6 h-6 text-maroon dark:text-slate" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy dark:text-cream mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:priyanshi.gangrade@example.com"
                    className="text-navy/70 dark:text-cream/70 hover:text-maroon dark:hover:text-slate transition-colors"
                  >
                    priyanshigangrade25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-maroon dark:text-slate" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy dark:text-cream mb-1">
                    Location
                  </h4>
                  <p className="text-navy/70 dark:text-cream/70">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-navy dark:text-cream mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg hover:bg-maroon dark:hover:bg-slate hover:scale-110 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-maroon dark:text-slate group-hover:text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg hover:bg-maroon dark:hover:bg-slate hover:scale-110 transition-all group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-maroon dark:text-slate group-hover:text-white" />
                </a>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-maroon/10 dark:bg-slate/10 rounded-lg hover:bg-maroon dark:hover:bg-slate hover:scale-110 transition-all group"
                  aria-label="LeetCode"
                >
                  <Code className="w-6 h-6 text-maroon dark:text-slate group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cream to-white dark:from-navy dark:to-navy/80 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy dark:text-cream mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-navy/20 dark:border-slate/20 rounded-lg focus:ring-2 focus:ring-maroon dark:focus:ring-slate focus:border-transparent text-navy dark:text-cream"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy dark:text-cream mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-navy/20 dark:border-slate/20 rounded-lg focus:ring-2 focus:ring-maroon dark:focus:ring-slate focus:border-transparent text-navy dark:text-cream"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy dark:text-cream mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-navy/20 dark:border-slate/20 rounded-lg focus:ring-2 focus:ring-maroon dark:focus:ring-slate focus:border-transparent text-navy dark:text-cream resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteData.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          06 — Contact
        </motion.p>

        <motion.h2
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's Work
          <br />
          <span className="text-accent italic">Together</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-neutral-dark text-lg leading-relaxed mb-8">
              Have a project in mind? I'd love to hear about it. Let's create
              something amazing together.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteData.email}`}
                className="group flex items-center gap-4 p-4 border border-neutral/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-light transition-all">
                  <Mail size={18} className="text-accent group-hover:text-light" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-neutral">
                    Email
                  </p>
                  <p className="text-primary font-medium">{siteData.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-neutral/10">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-neutral">
                    Phone
                  </p>
                  <p className="text-primary font-medium">{siteData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-neutral/10">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-neutral">
                    Location
                  </p>
                  <p className="text-primary font-medium">{siteData.location}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`mailto:${siteData.email}`}
              className="inline-flex items-center gap-2 bg-accent text-light px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 mt-4"
            >
              <Mail size={16} />
              Send Me an Email
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-neutral block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-neutral/20 py-3 text-primary focus:border-accent outline-none transition-colors font-body"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-neutral block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-neutral/20 py-3 text-primary focus:border-accent outline-none transition-colors font-body"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-neutral block mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-neutral/20 py-3 text-primary focus:border-accent outline-none transition-colors font-body resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-2 bg-primary text-light px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-accent transition-all duration-300 cursor-pointer"
            >
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

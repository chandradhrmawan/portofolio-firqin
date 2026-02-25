import { siteData } from '../../data/siteData';
import { Instagram, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-light section-padding pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top divider */}
        <div className="w-full h-[1px] bg-neutral/20 mb-12" />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-3xl font-bold mb-3">
              RF<span className="text-accent">.</span>
            </p>
            <p className="text-neutral text-sm leading-relaxed max-w-xs">
              Graphic Designer based in Bogor, Indonesia.
              Creating impactful visual identities with purpose and clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-[10px] tracking-wider uppercase text-accent mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral hover:text-light transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10px] tracking-wider uppercase text-accent mb-4">
              Follow
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Behance / Dribbble"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Dribbble size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full h-[1px] bg-neutral/20 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-neutral">
            © 2025 {siteData.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-neutral/50">
            Designed & built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}

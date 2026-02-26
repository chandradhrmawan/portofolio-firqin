import { siteData } from '../../data/siteData';
import { Instagram, Linkedin } from 'lucide-react';

const BehanceIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    <path d="M23.6 15.6c0-4.1-3.2-6.2-6.5-6.2-3.5 0-6.7 2.4-6.7 6.3 0 3.8 3 6.6 6.9 6.6 3.1 0 5.3-1.4 6.3-3.5h-3.1c-.6.7-1.7 1.2-3.2 1.2-2 0-3.3-1.1-3.5-2.8h9.8v-1.6zm-10.2-1.6c.3-1.7 1.5-3 3.5-3 1.8 0 3 .9 3.2 3h-6.7zm4.3-5.2h6.7V6.6h-6.7v2.2zM8.3 12.3c2.4 0 4.3 1.2 4.3 4.1 0 2.8-1.9 4.1-4.3 4.1H0V6.6h7.6c2.4 0 4.1 1.2 4.1 3.8 0 1.7-1.1 2.9-2.5 3.2 1.8.4 3.4 1.7 3.4 3.3.1-2.2-2-4.6-4.3-4.6zm-4.7-3v2.8h3c.8 0 1.5-.4 1.5-1.4 0-.9-.7-1.4-1.5-1.4h-3zm0 5.3v3.1h3.3c.9 0 1.7-.5 1.7-1.6 0-1.1-.8-1.5-1.7-1.5h-3.3z" />
  </svg>
);

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
                href="https://www.instagram.com/firqin.rf/"
                aria-label="Instagram"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ratu-firqin-fu-adiyah-60a57a298/"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.behance.net/fuadiyahfi117a"
                aria-label="Behance"
                className="w-10 h-10 border border-neutral/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
              >
                <BehanceIcon size={18} />
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

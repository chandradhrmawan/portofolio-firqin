import { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-light/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          RF<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {siteData.navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-xs uppercase tracking-widest text-neutral-dark hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-light/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {siteData.navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="font-heading text-3xl font-semibold text-primary hover:text-accent transition-colors cursor-pointer"
            style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

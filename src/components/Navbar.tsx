import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About & Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md py-4 border-b border-stone-800/50 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#home" className="flex flex-col items-start group">
            <span className="font-serif text-2xl tracking-widest text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5 font-bold">
              {BUSINESS_INFO.logoText} <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
            </span>
            <span className="text-[9px] tracking-[0.25em] text-amber-400 font-medium font-sans">
              {BUSINESS_INFO.subLogoText}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              id="navbar-cta-call"
              href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
              className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs uppercase tracking-wider font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-amber-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-stone-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-stone-900 border-b border-stone-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-stone-300 hover:text-amber-400 text-base font-medium py-2 border-b border-stone-800/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col sm:hidden gap-3">
                <a
                  id="mobile-navbar-cta-phone"
                  href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 text-sm uppercase tracking-wider font-bold py-2.5 px-4 rounded-full transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call: {BUSINESS_INFO.phoneNumbersFormatted[0]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

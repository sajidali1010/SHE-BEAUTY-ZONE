import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'services', 'commitment', 'story', 'packages', 'gallery', 'testimonials', 'booking', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#commitment', id: 'commitment' },
    { name: 'Our Story', href: '#story', id: 'story' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-[#0E0D0B]/92 backdrop-blur-md border-b border-[#D8B273]/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5'
              : 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#966B3D]/18 shadow-[0_8px_25px_rgba(80,55,30,0.06)] py-3.5'
            : isDark
            ? 'bg-gradient-to-b from-[#0E0D0B]/90 via-[#0E0D0B]/40 to-transparent py-5 sm:py-6'
            : 'bg-gradient-to-b from-[#FBF9F5]/92 via-[#FBF9F5]/50 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none"
          >
            <div
              className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border transition-all duration-300 p-0.5 ${
                isDark
                  ? 'border-[#D8B273]/40 bg-[#161412] group-hover:border-[#D8B273] shadow-[0_0_15px_rgba(216,178,115,0.2)]'
                  : 'border-[#966B3D]/35 bg-[#FFFFFF] group-hover:border-[#966B3D] shadow-sm'
              }`}
            >
              <img
                src="/brand_logo.png"
                alt="She Beauty Zone Emblem"
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.25em] text-lg sm:text-xl md:text-2xl font-normal uppercase transition-colors leading-tight ${
                  isDark
                    ? 'text-[#F9F6F0] group-hover:text-[#D8B273]'
                    : 'text-[#1E1915] group-hover:text-[#966B3D]'
                }`}
              >
                SHE
              </span>
              <span
                className={`font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.35em] font-semibold uppercase -mt-0.5 transition-opacity ${
                  isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                }`}
              >
                BEAUTY ZONE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  id={`nav-link-${link.id}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? isDark
                        ? 'text-[#F9F6F0]'
                        : 'text-[#1E1915] font-semibold'
                      : isDark
                      ? 'text-[#DDD4C7]/75 hover:text-[#F9F6F0]'
                      : 'text-[#4A3E35]/80 hover:text-[#1E1915]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full animate-in fade-in duration-300 ${
                        isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTAs + Theme Switcher */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Theme Toggle Button */}
            <ThemeToggle variant="header" />

            <a
              id="header-phone-cta"
              href={`tel:${BRAND_INFO.phone}`}
              className={`transition-colors p-2 text-xs tracking-wider flex items-center gap-1.5 ${
                isDark
                  ? 'text-[#DDD4C7]/80 hover:text-[#D8B273]'
                  : 'text-[#4A3E35]/85 hover:text-[#966B3D]'
              }`}
              title="Direct Studio Line"
            >
              <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
              <span className="hidden xl:inline text-[11px] font-sans">{BRAND_INFO.phoneDisplay}</span>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className={`group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                isDark
                  ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] shadow-[0_4px_20px_rgba(216,178,115,0.25)] hover:shadow-[0_6px_25px_rgba(216,178,115,0.4)]'
                  : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] shadow-[0_4px_18px_rgba(150,107,61,0.25)] hover:shadow-[0_6px_22px_rgba(150,107,61,0.35)]'
              }`}
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Book + Hamburger */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <ThemeToggle variant="header" />

            <button
              id="mobile-quick-book-header"
              onClick={() => onOpenBooking()}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-colors ${
                isDark
                  ? 'bg-[#D8B273] text-[#0E0D0B] hover:bg-[#ECC88C]'
                  : 'bg-[#966B3D] text-[#FFFFFF] hover:bg-[#7D552B]'
              }`}
            >
              Book
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                isDark
                  ? 'text-[#F9F6F0] hover:text-[#D8B273]'
                  : 'text-[#1E1915] hover:text-[#966B3D]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-in fade-in duration-300 ${
            isDark
              ? 'bg-[#0E0D0B]/98 backdrop-blur-xl text-[#F9F6F0]'
              : 'bg-[#FBF9F5]/98 backdrop-blur-xl text-[#1E1915]'
          }`}
        >
          <div className="flex flex-col space-y-4 mt-2 overflow-y-auto">
            <div
              className={`text-[10px] tracking-[0.3em] uppercase font-medium border-b pb-2 flex items-center justify-between ${
                isDark
                  ? 'text-[#D8B273] border-[#D8B273]/20'
                  : 'text-[#966B3D] border-[#966B3D]/25'
              }`}
            >
              <span>Studio Navigation</span>
              <span className="text-[9px] lowercase opacity-70">she beauty zone</span>
            </div>

            {navLinks.map((link) => (
              <a
                id={`mobile-nav-${link.id}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-serif text-2xl tracking-wide transition-colors flex items-center justify-between py-1 ${
                  isDark
                    ? 'text-[#F9F6F0] hover:text-[#D8B273]'
                    : 'text-[#1E1915] hover:text-[#966B3D]'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`text-xs font-sans tracking-widest uppercase ${
                    isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                  }`}
                >
                  0{navLinks.indexOf(link) + 1}
                </span>
              </a>
            ))}

            {/* Mobile Theme Toggle Section */}
            <div className="pt-3">
              <ThemeToggle variant="mobile" />
            </div>
          </div>

          <div
            className={`space-y-4 pt-4 border-t ${
              isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
            }`}
          >
            <div
              className={`flex flex-col gap-0.5 text-xs ${
                isDark ? 'text-[#DDD4C7]/70' : 'text-[#4A3E35]/80'
              }`}
            >
              <span
                className={`uppercase tracking-wider text-[10px] font-semibold ${
                  isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                }`}
              >
                Studio Location
              </span>
              <span>{BRAND_INFO.location}</span>
            </div>

            <button
              id="mobile-menu-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                isDark
                  ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C]'
                  : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

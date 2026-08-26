import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp, Send, Check } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavClick: (targetId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="contact"
      className={`relative pt-20 pb-12 border-t transition-colors duration-500 ${
        isDark
          ? 'bg-[#0E0D0B] border-[#D8B273]/15 text-[#DDD4C7]'
          : 'bg-[#F3EFEA] border-[#966B3D]/25 text-[#4A3E35]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b ${isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'}`}>
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-1">
              <span
                className={`font-serif tracking-[0.25em] text-2xl font-light uppercase block ${
                  isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                }`}
              >
                SHE
              </span>
              <span
                className={`font-sans text-[10px] tracking-[0.35em] font-semibold uppercase block ${
                  isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                }`}
              >
                BEAUTY ZONE
              </span>
            </div>

            <p className="text-xs font-light leading-relaxed max-w-sm">
              An intimate haute beauty salon and sanctuary dedicated to bespoke makeover rituals, bridal perfection, and restorative dermatological wellness.
            </p>

            {/* Social & Google Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND_INFO.socials.google}
                target="_blank"
                rel="noreferrer"
                className={`px-3.5 py-1.5 rounded-full border text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
                  isDark
                    ? 'bg-[#161412] border-[#D8B273]/30 text-[#D8B273] hover:bg-[#D8B273] hover:text-[#0E0D0B]'
                    : 'bg-[#FFFFFF] border-[#966B3D]/35 text-[#966B3D] hover:bg-[#966B3D] hover:text-[#FFFFFF] shadow-sm'
                }`}
                aria-label="View Google Profile & Reviews"
              >
                <span>Google Profile ({BRAND_INFO.rating} ★)</span>
              </a>

              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-[#161412] border-[#D8B273]/30 text-[#D8B273] hover:bg-[#D8B273] hover:text-[#0E0D0B]'
                    : 'bg-[#FFFFFF] border-[#966B3D]/35 text-[#966B3D] hover:bg-[#966B3D] hover:text-[#FFFFFF] shadow-sm'
                }`}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-[#161412] border-[#D8B273]/30 text-[#D8B273] hover:bg-[#D8B273] hover:text-[#0E0D0B]'
                    : 'bg-[#FFFFFF] border-[#966B3D]/35 text-[#966B3D] hover:bg-[#966B3D] hover:text-[#FFFFFF] shadow-sm'
                }`}
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <p
              className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
              }`}
            >
              Explore
            </p>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { name: 'Services Showcase', id: 'services' },
                { name: 'Our Purpose', id: 'commitment' },
                { name: 'Studio Story', id: 'story' },
                { name: 'Signature Packages', id: 'packages' },
                { name: 'Visual Portfolio', id: 'gallery' },
                { name: 'Client Reviews', id: 'testimonials' },
                { name: 'Reserve Suite', id: 'booking' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className={`transition-colors cursor-pointer ${
                      isDark
                        ? 'text-[#DDD4C7]/80 hover:text-[#D8B273]'
                        : 'text-[#4A3E35] hover:text-[#966B3D]'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <p
              className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
              }`}
            >
              Atelier Concierge
            </p>
            
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <span>{BRAND_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className={`transition-colors font-medium ${
                    isDark ? 'hover:text-[#D8B273]' : 'hover:text-[#966B3D]'
                  }`}
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className={`transition-colors font-medium ${
                    isDark ? 'hover:text-[#D8B273]' : 'hover:text-[#966B3D]'
                  }`}
                >
                  {BRAND_INFO.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <div className="space-y-0.5">
                  <p>Mon – Sat: 10:00 AM – 08:00 PM</p>
                  <p>Sun: 10:30 AM – 07:00 PM</p>
                  <p className={`text-[10px] font-medium ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`}>
                    Bridal: Early Morning & VIP Slots
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Private Salon Journal Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <p
              className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
              }`}
            >
              The Beauty Gazette
            </p>
            <p className="text-xs font-light leading-relaxed">
              Subscribe for seasonal skincare trends, VIP bridal event openings, and private member privileges.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-full text-xs focus:outline-none focus:ring-1 pr-10 border ${
                    isDark
                      ? 'bg-[#161412] border-[#D8B273]/30 text-[#F9F6F0] placeholder-[#A89F91]/50 focus:ring-[#D8B273]'
                      : 'bg-[#FFFFFF] border-[#966B3D]/35 text-[#1E1915] placeholder-[#7D6E63]/60 focus:ring-[#966B3D]'
                  }`}
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className={`absolute right-1 top-1 bottom-1 px-3 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-[#D8B273] text-[#0E0D0B] hover:bg-[#ECC88C]'
                      : 'bg-[#966B3D] text-[#FFFFFF] hover:bg-[#7D552B]'
                  }`}
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className={`text-[11px] font-semibold ${isDark ? 'text-[#ECC88C]' : 'text-[#7D552B]'}`}>
                  Thank you for joining our private registry.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light opacity-85">
          <p>
            © {new Date().getFullYear()} She Beauty Zone. All rights reserved. Master beauty craftsmanship in Bettiah.
          </p>

          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
              isDark ? 'hover:text-[#D8B273]' : 'hover:text-[#966B3D]'
            }`}
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

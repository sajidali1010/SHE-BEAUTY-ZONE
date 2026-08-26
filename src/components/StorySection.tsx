import React from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

export const StorySection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="story"
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#141210]' : 'bg-[#F3EFEA]'
      }`}
    >
      {/* Decorative Ambient Glow */}
      <div
        className={`absolute top-1/3 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/6' : 'bg-[#966B3D]/8'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className={`h-[1px] w-5 ${isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'}`} />
                <span
                  className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                    isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                  }`}
                >
                  Our Story & Heritage
                </span>
              </div>

              <h2
                id="story-heading"
                className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] ${
                  isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                }`}
              >
                Crafted in Passion, <br />
                <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>
                  Dedicated to You.
                </span>
              </h2>
            </div>

            <div
              className={`space-y-4 text-sm sm:text-base font-light leading-relaxed ${
                isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
              }`}
            >
              <p>
                Established in 2015 in Bettiah,{' '}
                <strong className={`font-medium ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
                  She Beauty Zone
                </strong>{' '}
                was founded with a passionate vision: to bring world-class bridal artistry, luxury hair transformations, and clinical skincare rituals to women in West Champaran in an elegant, private sanctuary.
              </p>

              <p>
                Conveniently located opposite the Old Post Office on Christian Quarter Road, our salon has been the trusted destination for over 9+ years for brides, party makeovers, smoothening & keratin treatments, and skin rejuvenation.
              </p>

              <p>
                Every experience starts with a dedicated consultation. We strictly utilize premium, skin-safe international cosmetics (MAC, Kryolan, L’Oréal, Schwarzkopf) and hygienic sterilized tools to ensure your complete peace of mind and lasting confidence.
              </p>
            </div>

            {/* Signature Block */}
            <div
              className={`pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-[#D8B273]/20' : 'border-[#966B3D]/25'
              }`}
            >
              <div className="space-y-1">
                <p
                  className={`font-serif text-xl sm:text-2xl italic ${
                    isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'
                  }`}
                >
                  Artistry Team & Concierge
                </p>
                <p
                  className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans font-semibold ${
                    isDark ? 'text-[#D8B273]' : 'text-[#7D552B]'
                  }`}
                >
                  She Beauty Zone Atelier
                </p>
              </div>

              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center ${
                  isDark
                    ? 'border-[#D8B273]/30 bg-[#0E0D0B] text-[#D8B273]'
                    : 'border-[#966B3D]/35 bg-[#FFFFFF] text-[#966B3D] shadow-sm'
                }`}
              >
                <HeartHandshake className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* Right Column: Layered Image Composition with Bronze Rings */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Thin Circular Outline Behind Composition */}
              <div
                className={`absolute -top-10 -right-6 w-64 h-64 sm:w-80 sm:h-80 rounded-full border pointer-events-none animate-[pulse_6s_ease-in-out_infinite] ${
                  isDark ? 'border-[#D8B273]/20' : 'border-[#966B3D]/25'
                }`}
              />
              <div
                className={`absolute -bottom-8 -left-6 w-48 h-48 rounded-full border pointer-events-none ${
                  isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
                }`}
              />

              {/* Primary Large Image */}
              <div
                className={`relative z-10 w-[82%] rounded-2xl overflow-hidden border aspect-[4/5] ${
                  isDark
                    ? 'bg-[#1C1916] border-[#D8B273]/25 shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
                    : 'bg-[#FFFFFF] border-[#966B3D]/30 shadow-[0_20px_50px_rgba(80,55,30,0.12)]'
                }`}
              >
                <img
                  id="story-primary-image"
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Precision makeup application at She Beauty Zone"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#0E0D0B]/80 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-[#1E1915]/70 via-transparent to-transparent'
                  }`}
                />
                
                <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-white">
                  Behind the scenes of tailored bridal styling
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div
                className={`absolute -bottom-8 right-0 z-20 w-[55%] rounded-xl overflow-hidden border-2 aspect-[1/1] group ${
                  isDark
                    ? 'bg-[#1C1916] border-[#D8B273]/40 shadow-[0_20px_40px_rgba(0,0,0,0.9)]'
                    : 'bg-[#FFFFFF] border-[#966B3D]/50 shadow-[0_15px_35px_rgba(80,55,30,0.18)]'
                }`}
              >
                <img
                  id="story-secondary-image"
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=85"
                  alt="Luxury salon atmosphere at She Beauty Zone"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15" />
                
                <div
                  className={`absolute top-2 right-2 p-1.5 rounded-full ${
                    isDark ? 'bg-[#0E0D0B]/80 text-[#D8B273]' : 'bg-[#FFFFFF]/90 text-[#966B3D]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Decorative Corner Framing */}
              <div
                className={`absolute -top-4 -left-4 w-8 h-8 border-t border-l rounded-tl-lg ${
                  isDark ? 'border-[#D8B273]/40' : 'border-[#966B3D]/45'
                }`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

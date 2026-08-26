import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className={`relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0 transition-colors duration-500 ${
        isDark ? 'bg-[#0E0D0B]' : 'bg-[#FBF9F5]'
      }`}
    >
      {/* Ambient Radial Glows */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[130px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/8' : 'bg-[#966B3D]/10'
        }`}
      />
      <div
        className={`absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full blur-[150px] pointer-events-none ${
          isDark ? 'bg-[#A67644]/7' : 'bg-[#966B3D]/8'
        }`}
      />

      {/* Decorative Fine Rings */}
      <div
        className={`hidden xl:block absolute top-20 right-1/3 w-72 h-72 rounded-full border pointer-events-none animate-[spin_60s_linear_infinite] ${
          isDark ? 'border-[#D8B273]/12' : 'border-[#966B3D]/15'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Cinematic Beauty Portrait */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none group">
              
              {/* Subtle Gold/Bronze Accent Frame */}
              <div
                className={`absolute -inset-2.5 sm:-inset-3.5 rounded-2xl sm:rounded-3xl border transition-all duration-700 pointer-events-none ${
                  isDark
                    ? 'border-[#D8B273]/25 group-hover:border-[#D8B273]/50'
                    : 'border-[#966B3D]/25 group-hover:border-[#966B3D]/55'
                }`}
              />
              
              {/* Main Editorial Image Container */}
              <div
                className={`relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden ${
                  isDark
                    ? 'bg-[#1C1916] shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
                    : 'bg-[#F3EFEA] shadow-[0_20px_50px_rgba(80,55,30,0.12)]'
                }`}
              >
                <img
                  id="hero-main-portrait"
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85"
                  alt="Royal bridal makeover and elegant hair styling at She Beauty Zone"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Cinematic Gradient Treatment */}
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#0E0D0B] via-transparent to-black/25 opacity-80'
                      : 'bg-gradient-to-t from-[#1E1915]/80 via-transparent to-black/10 opacity-70'
                  }`}
                />

                {/* Floating Luxury Quality Badge */}
                <div
                  className={`absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl backdrop-blur-md border flex items-center justify-between shadow-2xl ${
                    isDark
                      ? 'bg-[#161412]/92 border-[#D8B273]/30'
                      : 'bg-[#FFFFFF]/95 border-[#966B3D]/30 shadow-lg'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                        isDark
                          ? 'bg-[#D8B273]/15 border-[#D8B273]/40 text-[#D8B273]'
                          : 'bg-[#966B3D]/15 border-[#966B3D]/40 text-[#966B3D]'
                      }`}
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                          isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                        }`}
                      >
                        She Beauty Zone
                      </p>
                      <p
                        className={`text-[11px] tracking-wide font-light ${
                          isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                        }`}
                      >
                        Bettiah • Est. {BRAND_INFO.establishedYear}
                      </p>
                    </div>
                  </div>

                  <a
                    href={BRAND_INFO.googleShareUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`hidden sm:flex items-center space-x-1.5 text-xs font-semibold pl-3 border-l transition-opacity hover:opacity-80 ${
                      isDark
                        ? 'text-[#D8B273] border-[#D8B273]/25'
                        : 'text-[#966B3D] border-[#966B3D]/25'
                    }`}
                    title="View on Google"
                  >
                    <Star className={`w-3.5 h-3.5 ${isDark ? 'fill-[#D8B273]' : 'fill-[#966B3D]'}`} />
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1E1915]'}`}>{BRAND_INFO.rating}</span>
                    <span className={`text-[10px] font-normal ${isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'}`}>({BRAND_INFO.reviewCount} Reviews)</span>
                  </a>
                </div>
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div
                className={`absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg hidden sm:block ${
                  isDark ? 'border-[#D8B273]/40' : 'border-[#966B3D]/45'
                }`}
              />
              <div
                className={`absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg hidden sm:block ${
                  isDark ? 'border-[#D8B273]/40' : 'border-[#966B3D]/45'
                }`}
              />
            </div>
          </div>

          {/* Right Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div
              className={`inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full border backdrop-blur-sm ${
                isDark
                  ? 'border-[#D8B273]/30 bg-[#1C1916]/85'
                  : 'border-[#966B3D]/30 bg-[#FFFFFF]/90 shadow-sm'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'}`} />
              <span
                className={`text-[11px] tracking-[0.25em] uppercase font-semibold ${
                  isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                }`}
              >
                Private Luxury Salon & Spa
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1
                id="hero-main-heading"
                className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.08] ${
                  isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                }`}
              >
                Enhance Your <br className="hidden sm:inline" />
                <span className={`italic font-serif font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>
                  Natural Beauty.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p
              id="hero-subtext"
              className={`text-base sm:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0 ${
                isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
              }`}
            >
              Step into an intimate sanctuary crafted for transformative beauty experiences. From bespoke bridal artistry and high-definition makeovers to restorative skincare, each ritual is created around your uniqueness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-primary-book-cta"
                onClick={onOpenBooking}
                className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer ${
                  isDark
                    ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] shadow-[0_8px_30px_rgba(216,178,115,0.35)] hover:shadow-[0_12px_40px_rgba(216,178,115,0.5)]'
                    : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] shadow-[0_8px_25px_rgba(150,107,61,0.25)] hover:shadow-[0_12px_35px_rgba(150,107,61,0.4)]'
                }`}
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                id="hero-secondary-explore-cta"
                onClick={onExploreServices}
                className={`w-full sm:w-auto px-7 py-4 rounded-full text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  isDark
                    ? 'text-[#F9F6F0] border border-[#D8B273]/35 hover:border-[#D8B273] hover:bg-[#D8B273]/10'
                    : 'text-[#1E1915] border border-[#966B3D]/40 hover:border-[#966B3D] hover:bg-[#966B3D]/10'
                }`}
              >
                Explore Services
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className={`pt-6 border-t grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left ${
                isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
              }`}
            >
              <div>
                <div
                  className={`font-serif text-xl sm:text-2xl font-medium ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  4.7 ★
                </div>
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider mt-0.5 ${
                    isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'
                  }`}
                >
                  76+ Google Reviews
                </div>
              </div>

              <div
                className={`border-x px-2 ${
                  isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
                }`}
              >
                <div
                  className={`font-serif text-xl sm:text-2xl font-medium ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  100%
                </div>
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider mt-0.5 ${
                    isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'
                  }`}
                >
                  Top Brand Care
                </div>
              </div>

              <div>
                <div
                  className={`font-serif text-xl sm:text-2xl font-medium ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  Est. 2015
                </div>
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider mt-0.5 ${
                    isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'
                  }`}
                >
                  9+ Yrs In Bettiah
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

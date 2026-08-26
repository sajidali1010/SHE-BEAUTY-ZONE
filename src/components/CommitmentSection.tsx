import React from 'react';
import { Sparkles, Shield, Award, Heart, CheckCircle2 } from 'lucide-react';
import { COMMITMENT_FEATURES } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

export const CommitmentSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getIcon = (iconName: string) => {
    const iconClass = `w-5 h-5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`;
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className={iconClass} strokeWidth={1.5} />;
      case 'shield':
        return <Shield className={iconClass} strokeWidth={1.5} />;
      case 'award':
        return <Award className={iconClass} strokeWidth={1.5} />;
      case 'heart':
        return <Heart className={iconClass} strokeWidth={1.5} />;
      default:
        return <Sparkles className={iconClass} strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id="commitment"
      className={`relative py-24 lg:py-32 overflow-hidden border-t transition-colors duration-500 ${
        isDark
          ? 'bg-[#0E0D0B] border-[#D8B273]/15'
          : 'bg-[#FBF9F5] border-[#966B3D]/18'
      }`}
    >
      {/* Background Ambience */}
      <div
        className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/6' : 'bg-[#966B3D]/6'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Thin Bronze Decorative Frame */}
              <div
                className={`absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border transition-all duration-700 ${
                  isDark
                    ? 'border-[#D8B273]/25 group-hover:border-[#D8B273]/50'
                    : 'border-[#966B3D]/25 group-hover:border-[#966B3D]/50'
                }`}
              />

              {/* Vertical Image */}
              <div
                className={`relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden ${
                  isDark
                    ? 'bg-[#1C1916] shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                    : 'bg-[#F3EFEA] shadow-[0_20px_45px_rgba(80,55,30,0.1)]'
                }`}
              >
                <img
                  id="commitment-portrait-image"
                  src="https://images.unsplash.com/photo-1522337094346-290f26a121f0?auto=format&fit=crop&w=1200&q=85"
                  alt="Our commitment to refined beauty rituals at She Beauty Zone"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Cinematic Tint */}
                <div
                  className={`absolute inset-0 opacity-75 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#0E0D0B] via-transparent to-transparent'
                      : 'bg-gradient-to-t from-[#1E1915] via-transparent to-transparent'
                  }`}
                />

                {/* Editorial Corner Quote */}
                <div
                  className={`absolute bottom-6 left-6 right-6 p-4 rounded-lg backdrop-blur-sm border ${
                    isDark
                      ? 'bg-[#161412]/92 border-[#D8B273]/25'
                      : 'bg-[#FFFFFF]/95 border-[#966B3D]/30 shadow-md'
                  }`}
                >
                  <p
                    className={`font-serif italic text-sm leading-snug ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    "True beauty is not manufactured; it is unlocked through thoughtful artistry and respectful care."
                  </p>
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] mt-2 font-sans font-semibold ${
                      isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                    }`}
                  >
                    She Beauty Zone Philosophy
                  </p>
                </div>
              </div>

              {/* Minimal Bronze Decorative Accents */}
              <div
                className={`absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 rounded-br-xl hidden sm:block ${
                  isDark ? 'border-[#D8B273]/50' : 'border-[#966B3D]/50'
                }`}
              />
            </div>
          </div>

          {/* Right Column: Eyebrow, Heading & 2x2 Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Area */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className={`h-[1px] w-5 ${isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'}`} />
                <span
                  className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                    isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                  }`}
                >
                  Our Commitment
                </span>
              </div>

              <h2
                id="commitment-heading"
                className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight ${
                  isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                }`}
              >
                Beauty With <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Purpose</span>
              </h2>

              <p
                className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl ${
                  isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                }`}
              >
                Every brush stroke, hair contour, and skincare formula is chosen with absolute intention. We blend editorial mastery with uncompromising client wellness.
              </p>
            </div>

            {/* 2x2 Editorial Feature Grid with Subtle Line Dividers */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border shadow-md ${
                isDark
                  ? 'bg-[#D8B273]/20 border-[#D8B273]/25'
                  : 'bg-[#966B3D]/20 border-[#966B3D]/25'
              }`}
            >
              {COMMITMENT_FEATURES.map((feature, idx) => (
                <div
                  key={feature.id}
                  id={`commitment-feature-${feature.id}`}
                  className={`p-6 sm:p-7 transition-colors duration-300 flex flex-col justify-between space-y-3 ${
                    isDark
                      ? 'bg-[#161412] hover:bg-[#1C1916]'
                      : 'bg-[#FFFFFF] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                        isDark
                          ? 'bg-[#0E0D0B] border-[#D8B273]/35'
                          : 'bg-[#F3EFEA] border-[#966B3D]/35'
                      }`}
                    >
                      {getIcon(feature.icon)}
                    </div>
                    <span
                      className={`text-[10px] font-sans tracking-widest uppercase font-semibold ${
                        isDark ? 'text-[#D8B273]/60' : 'text-[#966B3D]/80'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3
                      className={`font-serif text-lg sm:text-xl font-medium ${
                        isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] font-light leading-relaxed ${
                        isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  <div
                    className={`pt-2 flex items-center gap-1.5 text-[11px] font-semibold ${
                      isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed Excellence</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Strip */}
            <div
              className={`pt-2 flex items-center gap-4 text-xs font-light ${
                isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'}`} />
              <span>Certified master cosmetologists with international bridal & runway certifications.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

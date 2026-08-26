import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SIGNATURE_PACKAGES } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface SignaturePackagesProps {
  onBookPackage: (packageTitle: string) => void;
}

export const SignaturePackages: React.FC<SignaturePackagesProps> = ({ onBookPackage }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="packages"
      className={`relative py-24 lg:py-32 overflow-hidden border-t transition-colors duration-500 ${
        isDark ? 'bg-[#0E0D0B] border-[#D8B273]/15' : 'bg-[#FBF9F5] border-[#966B3D]/18'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
            <span
              className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              Curated Experiences
            </span>
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
          </div>

          <h2
            id="packages-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            Signature <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Beauty Experiences</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            Comprehensive beauty rituals combining multiple artisanal disciplines for high-profile events, wedding celebrations, and complete self-rejuvenation.
          </p>
        </div>

        {/* 3 Editorial Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {SIGNATURE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`group flex flex-col justify-between rounded-2xl border transition-all duration-500 overflow-hidden hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-[#161412] border-[#D8B273]/20 hover:border-[#D8B273]/50 shadow-xl'
                  : 'bg-[#FFFFFF] border-[#966B3D]/25 hover:border-[#966B3D]/50 shadow-md'
              }`}
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1916]">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} at She Beauty Zone`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#161412] via-transparent to-black/30'
                      : 'bg-gradient-to-t from-[#1E1915]/80 via-transparent to-black/20'
                  }`}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full backdrop-blur-sm border text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5 shadow-md ${
                      isDark
                        ? 'bg-[#0E0D0B]/85 border-[#D8B273]/40 text-[#ECC88C]'
                        : 'bg-[#FFFFFF]/95 border-[#966B3D]/50 text-[#7D552B]'
                    }`}
                  >
                    <Sparkles className={`w-3 h-3 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    {pkg.badge}
                  </span>
                </div>

                {/* Duration */}
                <div
                  className={`absolute bottom-3 right-4 flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md border backdrop-blur-sm ${
                    isDark
                      ? 'text-[#F9F6F0] bg-[#0E0D0B]/80 border-[#D8B273]/20'
                      : 'text-white bg-[#1E1915]/80 border-[#966B3D]/30'
                  }`}
                >
                  <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#ECC88C]'}`} />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p
                      className={`text-[11px] uppercase tracking-[0.2em] font-semibold ${
                        isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                    <h3
                      className={`font-serif text-2xl font-normal transition-colors ${
                        isDark
                          ? 'text-[#F9F6F0] group-hover:text-[#ECC88C]'
                          : 'text-[#1E1915] group-hover:text-[#966B3D]'
                      }`}
                    >
                      {pkg.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed ${
                      isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Included Highlights */}
                  <div
                    className={`pt-3 border-t space-y-2 ${
                      isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
                    }`}
                  >
                    <p
                      className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
                        isDark ? 'text-[#ECC88C]' : 'text-[#7D552B]'
                      }`}
                    >
                      Included In This Ritual:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.includedServices.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-xs font-light ${
                            isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                              isDark ? 'bg-[#D8B273]' : 'bg-[#966B3D]'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  id={`book-package-${pkg.id}`}
                  onClick={() => onBookPackage(pkg.title)}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isDark
                      ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] group-hover:shadow-[0_6px_25px_rgba(216,178,115,0.35)]'
                      : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] group-hover:shadow-[0_6px_20px_rgba(150,107,61,0.3)]'
                  }`}
                >
                  <span>Book This Look</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

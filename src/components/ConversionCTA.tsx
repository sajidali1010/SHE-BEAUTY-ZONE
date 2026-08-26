import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface ConversionCTAProps {
  onOpenBooking: () => void;
  onContactClick: () => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({
  onOpenBooking,
  onContactClick,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="conversion-cta"
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#0E0D0B]' : 'bg-[#FBF9F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Banner Card */}
        <div
          className={`relative rounded-3xl overflow-hidden border p-8 sm:p-12 lg:p-16 text-center space-y-8 ${
            isDark
              ? 'bg-gradient-to-br from-[#1C1916] via-[#161412] to-[#0E0D0B] border-[#D8B273]/35 shadow-[0_25px_70px_rgba(0,0,0,0.85)]'
              : 'bg-gradient-to-br from-[#FFFFFF] via-[#F3EFEA] to-[#FAF9F5] border-[#966B3D]/35 shadow-[0_20px_50px_rgba(80,55,30,0.1)]'
          }`}
        >
          {/* Ambient Bronze Glow Behind Card */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
              isDark ? 'bg-[#D8B273]/10' : 'bg-[#966B3D]/12'
            }`}
          />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <Sparkles className={`w-4 h-4 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
            <span
              className={`text-[11px] uppercase tracking-[0.3em] font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              Experience The Haute Difference
            </span>
            <Sparkles className={`w-4 h-4 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
          </div>

          {/* Heading */}
          <h2
            id="cta-banner-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight max-w-3xl mx-auto leading-[1.12] ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            Ready for Your <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Signature Transformation?</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            Whether preparing for your wedding ceremony, an editorial gala, or a restorative afternoon, we are honored to craft your look.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="cta-book-appointment-btn"
              onClick={onOpenBooking}
              className={`w-full sm:w-auto px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer ${
                isDark
                  ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] shadow-[0_8px_30px_rgba(216,178,115,0.35)]'
                  : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] shadow-[0_8px_25px_rgba(150,107,61,0.3)]'
              }`}
            >
              <span>Reserve Suite Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <a
              id="cta-call-us-btn"
              href={`tel:${BRAND_INFO.phone}`}
              className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                isDark
                  ? 'text-[#F9F6F0] border border-[#D8B273]/40 hover:border-[#D8B273] hover:bg-[#D8B273]/10'
                  : 'text-[#1E1915] border border-[#966B3D]/45 hover:border-[#966B3D] hover:bg-[#966B3D]/10'
              }`}
            >
              <PhoneCall className={`w-4 h-4 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
              <span>Call {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

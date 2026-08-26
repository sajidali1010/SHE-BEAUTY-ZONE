import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className={`relative py-24 lg:py-32 overflow-hidden border-t transition-colors duration-500 ${
        isDark ? 'bg-[#0E0D0B] border-[#D8B273]/15' : 'bg-[#FBF9F5] border-[#966B3D]/18'
      }`}
    >
      {/* Subtle Background Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[160px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/5' : 'bg-[#966B3D]/8'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
            <span
              className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              Client Praises
            </span>
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
          </div>

          <h2
            id="testimonials-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            What Our <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Clients Say</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            Real stories from guests who entrusted us with their most cherished milestones and private beauty rituals.
          </p>
        </div>

        {/* Desktop 2-Column Luxury Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                isDark
                  ? 'bg-[#161412] border-[#D8B273]/20 hover:border-[#D8B273]/45 shadow-xl'
                  : 'bg-[#FFFFFF] border-[#966B3D]/25 hover:border-[#966B3D]/45 shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className={`flex items-center space-x-1 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${isDark ? 'fill-[#D8B273]' : 'fill-[#966B3D]'}`} />
                    ))}
                  </div>

                  <span
                    className={`text-[11px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full border ${
                      isDark
                        ? 'text-[#D8B273] bg-[#1C1916] border-[#D8B273]/25'
                        : 'text-[#7D552B] bg-[#F3EFEA] border-[#966B3D]/30'
                    }`}
                  >
                    {t.serviceType}
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  className={`font-serif text-lg sm:text-xl font-light italic leading-relaxed ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
                }`}
              >
                <div>
                  <h4
                    className={`font-sans text-sm font-semibold tracking-wide ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    {t.clientName}
                  </h4>
                  <p className={`text-[11px] ${isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'}`}>
                    Verified Client • {t.date}
                  </p>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    isDark
                      ? 'bg-[#1C1916] border-[#D8B273]/30 text-[#D8B273]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/35 text-[#966B3D]'
                  }`}
                >
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Interactive Carousel */}
        <div className="lg:hidden relative max-w-xl mx-auto">
          <div
            className={`p-7 sm:p-8 rounded-2xl border flex flex-col justify-between min-h-[260px] space-y-6 ${
              isDark
                ? 'bg-[#161412] border-[#D8B273]/25 shadow-xl'
                : 'bg-[#FFFFFF] border-[#966B3D]/30 shadow-md'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`flex items-center space-x-1 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`}>
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${isDark ? 'fill-[#D8B273]' : 'fill-[#966B3D]'}`} />
                  ))}
                </div>
                <span
                  className={`text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border font-semibold ${
                    isDark
                      ? 'text-[#D8B273] bg-[#1C1916] border-[#D8B273]/25'
                      : 'text-[#7D552B] bg-[#F3EFEA] border-[#966B3D]/30'
                  }`}
                >
                  {TESTIMONIALS[currentIndex].serviceType}
                </span>
              </div>

              <p
                className={`font-serif text-base sm:text-lg font-light italic leading-relaxed ${
                  isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                }`}
              >
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
            </div>

            <div
              className={`pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-[#D8B273]/15' : 'border-[#966B3D]/20'
              }`}
            >
              <div>
                <h4 className={`font-sans text-sm font-semibold ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
                  {TESTIMONIALS[currentIndex].clientName}
                </h4>
                <p className={`text-[10px] ${isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'}`}>
                  Verified Client • {TESTIMONIALS[currentIndex].date}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className={`p-2 rounded-full border transition-colors ${
                    isDark
                      ? 'bg-[#1C1916] border-[#D8B273]/30 text-[#F9F6F0] hover:text-[#D8B273]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/35 text-[#1E1915] hover:text-[#966B3D]'
                  }`}
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className={`p-2 rounded-full border transition-colors ${
                    isDark
                      ? 'bg-[#1C1916] border-[#D8B273]/30 text-[#F9F6F0] hover:text-[#D8B273]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/35 text-[#1E1915] hover:text-[#966B3D]'
                  }`}
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? isDark ? 'w-6 bg-[#D8B273]' : 'w-6 bg-[#966B3D]'
                    : isDark ? 'w-2 bg-[#D8B273]/30' : 'w-2 bg-[#966B3D]/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

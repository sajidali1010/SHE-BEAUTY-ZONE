import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServicesShowcaseProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectService,
  onBookService,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="services"
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#141210]' : 'bg-[#F3EFEA]'
      }`}
    >
      {/* Subtle Background Radial Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full blur-[150px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/6' : 'bg-[#966B3D]/8'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
            <span
              className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              Our Services
            </span>
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
          </div>

          <h2
            id="services-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            Beauty Rituals, <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Designed for You</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            Indulge in our curated selection of bespoke salon therapies, created by master stylists to revitalize your glow and elevate your personal presence.
          </p>

          {/* Decorative Bronze Divider */}
          <div className="flex items-center justify-center pt-2">
            <div
              className={`w-12 h-[1px] ${
                isDark
                  ? 'bg-gradient-to-r from-transparent via-[#D8B273] to-transparent'
                  : 'bg-gradient-to-r from-transparent via-[#966B3D] to-transparent'
              }`}
            />
            <div
              className={`w-1.5 h-1.5 rotate-45 border mx-1 ${
                isDark
                  ? 'border-[#D8B273] bg-[#141210]'
                  : 'border-[#966B3D] bg-[#F3EFEA]'
              }`}
            />
            <div
              className={`w-12 h-[1px] ${
                isDark
                  ? 'bg-gradient-to-r from-[#D8B273] via-transparent to-transparent'
                  : 'bg-gradient-to-r from-[#966B3D] via-transparent to-transparent'
              }`}
            />
          </div>
        </div>

        {/* Desktop 5-Item Circular Horizontal Showcase */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8 items-start justify-items-center">
          {SERVICES_DATA.map((service) => {
            const isFeatured = service.isFeatured;
            return (
              <div
                key={service.id}
                id={`service-item-desktop-${service.id}`}
                className="group flex flex-col items-center text-center transition-all duration-300 cursor-pointer h-full w-full max-w-[210px] justify-between"
                onClick={() => onSelectService(service)}
              >
                {/* Circular Image Container */}
                <div className="relative mb-5 flex flex-col items-center">
                  {/* Outer Bronze Ring */}
                  <div
                    className={`rounded-full transition-all duration-500 p-1.5 ${
                      isDark
                        ? isFeatured
                          ? 'border-2 border-[#D8B273] shadow-[0_0_25px_rgba(216,178,115,0.3)] group-hover:border-[#ECC88C] group-hover:shadow-[0_0_30px_rgba(216,178,115,0.45)]'
                          : 'border border-[#D8B273]/35 group-hover:border-[#D8B273] group-hover:shadow-[0_0_20px_rgba(216,178,115,0.25)]'
                        : isFeatured
                        ? 'border-2 border-[#966B3D] shadow-[0_0_20px_rgba(150,107,61,0.25)] group-hover:border-[#7D552B] group-hover:shadow-[0_0_25px_rgba(150,107,61,0.35)]'
                        : 'border border-[#966B3D]/35 group-hover:border-[#966B3D] group-hover:shadow-[0_0_18px_rgba(150,107,61,0.2)]'
                    }`}
                  >
                    {/* Inner Image Circle - Perfectly Uniform Dimensions */}
                    <div
                      className={`relative w-38 h-38 xl:w-42 xl:h-42 rounded-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.04] ${
                        isDark ? 'bg-[#1C1916]' : 'bg-[#FFFFFF]'
                      }`}
                      style={{ width: '160px', height: '160px' }}
                    >
                      <img
                        src={service.image}
                        alt={`${service.name} at She Beauty Zone`}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="eager"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (service.id === 'skin-care') {
                            target.src = 'https://images.unsplash.com/photo-1512290900672-1f02e71f2562?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'bridal-makeover') {
                            target.src = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'hair-treatments') {
                            target.src = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'nail-studio') {
                            target.src = 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80';
                          } else {
                            target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80';
                          }
                        }}
                      />
                      
                      {/* Vignette Overlay */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-30 ${
                          isDark
                            ? 'bg-gradient-to-t from-[#0E0D0B]/50 via-transparent to-black/10'
                            : 'bg-gradient-to-t from-[#1E1915]/40 via-transparent to-black/5'
                        }`}
                      />

                      {/* Featured Badge inside Top */}
                      {isFeatured && (
                        <div className="absolute top-2.5 inset-x-0 flex justify-center z-10">
                          <span
                            className={`px-2 py-0.5 rounded-full backdrop-blur-md border text-[8px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1 shadow-md ${
                              isDark
                                ? 'bg-[#0E0D0B]/90 border-[#D8B273]/60 text-[#ECC88C]'
                                : 'bg-[#FFFFFF]/95 border-[#966B3D]/70 text-[#7D552B]'
                            }`}
                          >
                            <Sparkles className={`w-2 h-2 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Details Under Circle - Perfectly Synchronized Heights */}
                <div className="flex flex-col items-center justify-between flex-1 w-full space-y-2">
                  {/* Title with locked height for perfect cross-column baseline alignment */}
                  <div className="h-14 flex items-center justify-center px-1">
                    <h3
                      className={`font-serif text-base xl:text-lg leading-tight transition-colors duration-300 ${
                        isDark
                          ? 'text-[#F9F6F0] group-hover:text-[#ECC88C]'
                          : 'text-[#1E1915] group-hover:text-[#966B3D]'
                      } ${isFeatured ? 'font-medium' : 'font-normal'}`}
                    >
                      {service.name}
                    </h3>
                  </div>

                  {/* Description with locked height for perfect cross-column baseline alignment */}
                  <div className="h-14 flex items-center justify-center px-1">
                    <p
                      className={`text-xs font-light line-clamp-3 leading-relaxed ${
                        isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link anchored at identical bottom position */}
                  <div className="pt-2">
                    <div
                      className={`flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-transform duration-300 group-hover:translate-x-0.5 ${
                        isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                      }`}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet / Mobile Layout: Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = service.isFeatured;
            return (
              <div
                key={service.id}
                id={`service-item-mobile-${service.id}`}
                className={`group flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1C1916] border-[#D8B273]/20 hover:border-[#D8B273]/50'
                    : 'bg-[#FFFFFF] border-[#966B3D]/25 hover:border-[#966B3D]/50 shadow-sm'
                } ${isFeatured && index === 0 ? 'sm:col-span-2' : ''}`}
                onClick={() => onSelectService(service)}
              >
                {/* Circular Image Container */}
                <div className="relative mb-5">
                  <div
                    className={`rounded-full p-1.5 transition-all duration-300 ${
                      isDark
                        ? isFeatured
                          ? 'border-2 border-[#D8B273] shadow-[0_0_25px_rgba(216,178,115,0.3)]'
                          : 'border border-[#D8B273]/30'
                        : isFeatured
                        ? 'border-2 border-[#966B3D] shadow-[0_0_20px_rgba(150,107,61,0.25)]'
                        : 'border border-[#966B3D]/35'
                    }`}
                  >
                    <div
                      className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ${
                        isDark ? 'bg-[#1C1916]' : 'bg-[#FAF7F2]'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={`${service.name} at She Beauty Zone`}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (service.id === 'skin-care') {
                            target.src = 'https://images.unsplash.com/photo-1512290900672-1f02e71f2562?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'bridal-makeover') {
                            target.src = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'hair-treatments') {
                            target.src = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80';
                          } else if (service.id === 'nail-studio') {
                            target.src = 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80';
                          } else {
                            target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {isFeatured && (
                    <span
                      className={`absolute -bottom-2 inset-x-0 mx-auto w-max px-3 py-0.5 rounded-full border text-[9px] uppercase tracking-widest font-semibold ${
                        isDark
                          ? 'bg-[#0E0D0B] border-[#D8B273] text-[#D8B273]'
                          : 'bg-[#FFFFFF] border-[#966B3D] text-[#966B3D]'
                      }`}
                    >
                      Most Requested
                    </span>
                  )}
                </div>

                {/* Typography & Actions */}
                <div className="space-y-2 max-w-xs">
                  <h3
                    className={`font-serif text-xl font-normal transition-colors ${
                      isDark
                        ? 'text-[#F9F6F0] group-hover:text-[#ECC88C]'
                        : 'text-[#1E1915] group-hover:text-[#966B3D]'
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="pt-3 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service);
                      }}
                      className={`text-xs tracking-wider uppercase font-semibold inline-flex items-center gap-1 cursor-pointer ${
                        isDark
                          ? 'text-[#D8B273] hover:text-[#ECC88C]'
                          : 'text-[#966B3D] hover:text-[#7D552B]'
                      }`}
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className={isDark ? 'text-[#D8B273]/30' : 'text-[#966B3D]/30'}>•</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookService(service.id);
                      }}
                      className={`text-xs tracking-wider uppercase font-semibold cursor-pointer ${
                        isDark
                          ? 'text-[#F9F6F0] hover:text-[#D8B273]'
                          : 'text-[#1E1915] hover:text-[#966B3D]'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Quote Strip */}
        <div
          className={`mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl border max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-[#1C1916] border-[#D8B273]/20 shadow-xl'
              : 'bg-[#FFFFFF] border-[#966B3D]/25 shadow-md'
          }`}
        >
          <div className="text-left space-y-1">
            <h4
              className={`font-serif text-xl sm:text-2xl ${
                isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
              }`}
            >
              Custom Makeover Consultations
            </h4>
            <p
              className={`text-xs sm:text-sm font-light ${
                isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
              }`}
            >
              Not sure which service suits your occasion? Schedule a complimentary 15-minute bridal or beauty discovery.
            </p>
          </div>

          <button
            onClick={() => onBookService('consultation')}
            className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all cursor-pointer ${
              isDark
                ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] shadow-[0_4px_20px_rgba(216,178,115,0.25)]'
                : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] shadow-[0_4px_15px_rgba(150,107,61,0.25)]'
            }`}
          >
            Request Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

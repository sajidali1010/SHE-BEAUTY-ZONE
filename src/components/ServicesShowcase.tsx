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
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8 items-end justify-items-center">
          {SERVICES_DATA.map((service) => {
            const isCenter = service.isFeatured;
            return (
              <div
                key={service.id}
                id={`service-item-desktop-${service.id}`}
                className={`group flex flex-col items-center text-center transition-all duration-500 cursor-pointer ${
                  isCenter ? '-translate-y-3' : 'hover:-translate-y-1.5'
                }`}
                onClick={() => onSelectService(service)}
              >
                {/* Circular Image Container */}
                <div className="relative mb-6">
                  {/* Outer Bronze Ring */}
                  <div
                    className={`rounded-full transition-all duration-500 p-1.5 ${
                      isDark
                        ? isCenter
                          ? 'border-2 border-[#D8B273] shadow-[0_0_30px_rgba(216,178,115,0.35)] group-hover:border-[#ECC88C]'
                          : 'border border-[#D8B273]/35 group-hover:border-[#D8B273] group-hover:shadow-[0_0_20px_rgba(216,178,115,0.25)]'
                        : isCenter
                        ? 'border-2 border-[#966B3D] shadow-[0_0_25px_rgba(150,107,61,0.3)] group-hover:border-[#7D552B]'
                        : 'border border-[#966B3D]/35 group-hover:border-[#966B3D] group-hover:shadow-[0_0_18px_rgba(150,107,61,0.2)]'
                    }`}
                  >
                    {/* Inner Image Circle */}
                    <div
                      className={`relative rounded-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.04] ${
                        isDark ? 'bg-[#1C1916]' : 'bg-[#FFFFFF]'
                      } ${
                        isCenter
                          ? 'w-48 h-48 xl:w-52 xl:h-52'
                          : 'w-36 h-36 xl:w-40 xl:h-40'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={`${service.name} at She Beauty Zone`}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Vignette Overlay */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-40 ${
                          isDark
                            ? 'bg-gradient-to-t from-[#0E0D0B]/60 via-transparent to-black/10'
                            : 'bg-gradient-to-t from-[#1E1915]/50 via-transparent to-black/5'
                        }`}
                      />

                      {/* Featured Center Badge */}
                      {isCenter && (
                        <div className="absolute top-3 inset-x-0 flex justify-center">
                          <span
                            className={`px-2.5 py-0.5 rounded-full backdrop-blur-sm border text-[9px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1 shadow-md ${
                              isDark
                                ? 'bg-[#0E0D0B]/90 border-[#D8B273]/50 text-[#ECC88C]'
                                : 'bg-[#FFFFFF]/95 border-[#966B3D]/60 text-[#7D552B]'
                            }`}
                          >
                            <Sparkles className={`w-2.5 h-2.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Details Under Circle */}
                <div className="space-y-2 max-w-[200px]">
                  <h3
                    className={`font-serif text-lg xl:text-xl transition-colors duration-300 ${
                      isDark
                        ? 'text-[#F9F6F0] group-hover:text-[#ECC88C]'
                        : 'text-[#1E1915] group-hover:text-[#966B3D]'
                    } ${isCenter ? 'font-medium text-xl xl:text-2xl' : 'font-normal'}`}
                  >
                    {service.name}
                  </h3>

                  <p
                    className={`text-xs font-light line-clamp-2 leading-relaxed ${
                      isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`pt-2 flex items-center justify-center gap-1 text-[11px] uppercase tracking-[0.18em] font-semibold transition-transform duration-300 group-hover:translate-x-0.5 ${
                      isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                    }`}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet / Mobile Layout: Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isCenter = service.isFeatured;
            return (
              <div
                key={service.id}
                id={`service-item-mobile-${service.id}`}
                className={`group flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1C1916] border-[#D8B273]/20 hover:border-[#D8B273]/50'
                    : 'bg-[#FFFFFF] border-[#966B3D]/25 hover:border-[#966B3D]/50 shadow-sm'
                } ${isCenter && index === 0 ? 'sm:col-span-2' : ''}`}
                onClick={() => onSelectService(service)}
              >
                {/* Circular Image Container */}
                <div className="relative mb-5">
                  <div
                    className={`rounded-full p-1.5 transition-all duration-300 ${
                      isDark
                        ? isCenter
                          ? 'border-2 border-[#D8B273] shadow-[0_0_25px_rgba(216,178,115,0.3)]'
                          : 'border border-[#D8B273]/30'
                        : isCenter
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
                      />
                    </div>
                  </div>

                  {isCenter && (
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
                      className={`text-xs tracking-wider uppercase font-semibold inline-flex items-center gap-1 ${
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
                      className={`text-xs tracking-wider uppercase font-semibold ${
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

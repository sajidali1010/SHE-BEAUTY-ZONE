import React from 'react';
import { X, Clock, Check, Sparkles, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!service) return null;

  return (
    <div
      id="service-detail-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative max-w-2xl w-full border rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all max-h-[90vh] flex flex-col ${
          isDark
            ? 'bg-[#161412] border-[#D8B273]/35 text-[#F9F6F0]'
            : 'bg-[#FBF9F5] border-[#966B3D]/35 text-[#1E1915]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-sm border transition-colors ${
            isDark
              ? 'bg-[#0E0D0B]/80 border-[#D8B273]/30 text-[#F9F6F0] hover:text-[#D8B273]'
              : 'bg-[#FFFFFF]/90 border-[#966B3D]/30 text-[#1E1915] hover:text-[#966B3D]'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner Image */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden bg-black shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
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
          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-t from-[#161412] via-transparent to-black/30'
                : 'bg-gradient-to-t from-[#FBF9F5] via-transparent to-black/30'
            }`}
          />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span
              className={`px-3 py-1 rounded-full backdrop-blur-md border text-[10px] uppercase tracking-[0.2em] font-semibold inline-flex items-center gap-1 shadow-md ${
                isDark
                  ? 'bg-[#0E0D0B]/85 border-[#D8B273]/40 text-[#ECC88C]'
                  : 'bg-[#FBF9F5]/95 border-[#966B3D]/50 text-[#7D552B]'
              }`}
            >
              <Sparkles className={`w-3 h-3 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
              Artisanal Service
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                {service.name}
              </h3>
              <div
                className={`flex items-center gap-1.5 text-xs font-sans px-3 py-1 rounded-full border whitespace-nowrap font-medium ${
                  isDark
                    ? 'border-[#D8B273]/20 bg-[#1E1A17] text-[#ECC88C]'
                    : 'border-[#966B3D]/25 bg-[#F3EFEA] text-[#7D552B]'
                }`}
              >
                <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <span>{service.duration}</span>
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm font-light leading-relaxed ${
                isDark ? 'text-[#DDD4C7]/80' : 'text-[#4A3E35]'
              }`}
            >
              {service.description}
            </p>
          </div>

          {/* Highlights & Inclusions */}
          <div className="space-y-3">
            <h4
              className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              What is included in this session
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-light ${
                    isDark
                      ? 'bg-[#1E1A17] border-[#D8B273]/15 text-[#DDD4C7]'
                      : 'bg-[#FFFFFF] border-[#966B3D]/20 text-[#4A3E35] shadow-sm'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      isDark ? 'bg-[#D8B273]/20 text-[#D8B273]' : 'bg-[#966B3D]/20 text-[#966B3D]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Note */}
          <div
            className={`p-4 rounded-xl border text-xs font-light space-y-1 ${
              isDark
                ? 'bg-[#1E1A17]/60 border-[#D8B273]/20 text-[#DDD4C7]/80'
                : 'bg-[#F3EFEA] border-[#966B3D]/25 text-[#4A3E35]'
            }`}
          >
            <p
              className={`font-semibold uppercase tracking-wider text-[10px] ${
                isDark ? 'text-[#ECC88C]' : 'text-[#7D552B]'
              }`}
            >
              Tailored Consultation Guarantee:
            </p>
            <p>
              Each appointment begins with a diagnostic skin and symmetry assessment to ensure makeup shades and hair textures match your aesthetic goals.
            </p>
          </div>
        </div>

        {/* Modal Bottom CTA Footer */}
        <div
          className={`p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${
            isDark ? 'bg-[#0E0D0B] border-[#D8B273]/15' : 'bg-[#FFFFFF] border-[#966B3D]/20'
          }`}
        >
          <div className="text-center sm:text-left">
            <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'}`}>
              Estimated Duration
            </p>
            <p className={`font-serif text-lg ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
              {service.duration} Session
            </p>
          </div>

          <button
            onClick={() => onBookService(service.id)}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer ${
              isDark
                ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C]'
                : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};

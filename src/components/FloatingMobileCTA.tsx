import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface FloatingMobileCTAProps {
  onOpenBooking: () => void;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({ onOpenBooking }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      id="floating-mobile-cta"
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 backdrop-blur-xl border-t shadow-2xl transition-colors duration-300 ${
        isDark
          ? 'bg-[#171614]/95 border-[#C2A386]/20'
          : 'bg-[#FAF7F2]/95 border-[#9E7B5C]/25'
      }`}
    >
      <div className="max-w-md mx-auto flex items-center gap-2">
        
        {/* Direct Call Button */}
        <a
          id="floating-phone-btn"
          href={`tel:${BRAND_INFO.phone}`}
          className={`p-3 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
            isDark
              ? 'bg-[#25211D] border-[#C2A386]/30 text-[#C2A386]'
              : 'bg-[#FFFFFF] border-[#9E7B5C]/35 text-[#9E7B5C] shadow-sm'
          }`}
          aria-label="Direct Phone Line"
          title={`Call ${BRAND_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Google Maps Location Button */}
        <a
          id="floating-maps-btn"
          href={BRAND_INFO.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className={`p-3 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
            isDark
              ? 'bg-[#25211D] border-[#C2A386]/30 text-[#C2A386]'
              : 'bg-[#FFFFFF] border-[#9E7B5C]/35 text-[#9E7B5C] shadow-sm'
          }`}
          aria-label="Google Maps Location"
          title="Open Location in Google Maps"
        >
          <MapPin className="w-4 h-4" />
        </a>

        {/* Primary Booking Button */}
        <button
          id="floating-book-now-btn"
          onClick={onOpenBooking}
          className={`flex-1 py-3 px-4 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
            isDark
              ? 'text-[#171614] bg-[#C2A386] hover:bg-[#DFCAAF]'
              : 'text-[#FFFFFF] bg-[#9E7B5C] hover:bg-[#846447]'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Book Slot</span>
        </button>

      </div>
    </div>
  );
};


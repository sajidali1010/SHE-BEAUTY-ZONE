import React from 'react';
import { CheckCircle2, Calendar, Clock, Sparkles, MapPin, X } from 'lucide-react';
import { BookingFormData } from '../types';
import { BRAND_INFO, SERVICES_DATA, SIGNATURE_PACKAGES } from '../data/salonData';
import { useTheme } from '../context/ThemeContext';

interface AppointmentSuccessModalProps {
  booking: BookingFormData | null;
  onClose: () => void;
}

export const AppointmentSuccessModal: React.FC<AppointmentSuccessModalProps> = ({
  booking,
  onClose,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!booking) return null;

  const foundService =
    SERVICES_DATA.find((s) => s.id === booking.serviceId)?.name ||
    SIGNATURE_PACKAGES.find((p) => p.id === booking.serviceId)?.title ||
    booking.serviceId;

  return (
    <div
      id="appointment-success-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative max-w-lg w-full border rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-center ${
          isDark
            ? 'bg-[#1E1C19] border-[#C2A386]/35 text-[#F3E9DC]'
            : 'bg-[#FAF7F2] border-[#9E7B5C]/35 text-[#241E19]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full border transition-colors ${
            isDark
              ? 'bg-[#25211D] border-[#C2A386]/20 text-[#E8DCCF]/70 hover:text-[#C2A386]'
              : 'bg-[#FFFFFF] border-[#9E7B5C]/25 text-[#584D43] hover:text-[#9E7B5C]'
          }`}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Check Icon */}
        <div className="flex justify-center pt-2">
          <div
            className={`w-16 h-16 rounded-full border flex items-center justify-center shadow-lg ${
              isDark
                ? 'bg-[#25211D] border-[#C2A386]/50 text-[#C2A386]'
                : 'bg-[#FFFFFF] border-[#9E7B5C]/50 text-[#9E7B5C]'
            }`}
          >
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5">
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-[#C2A386]' : 'text-[#9E7B5C]'}`} />
            <span
              className={`text-[10px] uppercase tracking-[0.25em] font-semibold ${
                isDark ? 'text-[#C2A386]' : 'text-[#9E7B5C]'
              }`}
            >
              Suite Request Received
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            Thank You, <span className={`italic ${isDark ? 'text-[#DFCAAF]' : 'text-[#9E7B5C]'}`}>{booking.fullName}</span>
          </h3>

          <p
            className={`text-xs font-light leading-relaxed max-w-sm mx-auto ${
              isDark ? 'text-[#E8DCCF]/75' : 'text-[#584D43]'
            }`}
          >
            Your appointment request has been transmitted to our senior salon concierge. We will confirm your suite time via phone & email within 2 hours.
          </p>
        </div>

        {/* Summary Card */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border space-y-3 text-left ${
            isDark
              ? 'bg-[#25211D] border-[#C2A386]/20'
              : 'bg-[#FFFFFF] border-[#9E7B5C]/25 shadow-sm'
          }`}
        >
          <div
            className={`flex justify-between items-center pb-2 border-b text-xs ${
              isDark ? 'border-[#C2A386]/15' : 'border-[#9E7B5C]/15'
            }`}
          >
            <span className={isDark ? 'text-[#E8DCCF]/65' : 'text-[#857466]'}>Requested Ritual:</span>
            <span className={`font-serif font-medium ${isDark ? 'text-[#DFCAAF]' : 'text-[#9E7B5C]'}`}>
              {foundService}
            </span>
          </div>

          <div
            className={`flex justify-between items-center pb-2 border-b text-xs ${
              isDark ? 'border-[#C2A386]/15' : 'border-[#9E7B5C]/15'
            }`}
          >
            <span className={`flex items-center gap-1 ${isDark ? 'text-[#E8DCCF]/65' : 'text-[#857466]'}`}>
              <Calendar className="w-3.5 h-3.5" /> Date:
            </span>
            <span className={`font-medium ${isDark ? 'text-[#F3E9DC]' : 'text-[#241E19]'}`}>
              {booking.preferredDate}
            </span>
          </div>

          <div
            className={`flex justify-between items-center pb-2 border-b text-xs ${
              isDark ? 'border-[#C2A386]/15' : 'border-[#9E7B5C]/15'
            }`}
          >
            <span className={`flex items-center gap-1 ${isDark ? 'text-[#E8DCCF]/65' : 'text-[#857466]'}`}>
              <Clock className="w-3.5 h-3.5" /> Preferred Time:
            </span>
            <span className={`font-medium ${isDark ? 'text-[#F3E9DC]' : 'text-[#241E19]'}`}>
              {booking.preferredTime}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className={`flex items-center gap-1 ${isDark ? 'text-[#E8DCCF]/65' : 'text-[#857466]'}`}>
              <MapPin className="w-3.5 h-3.5" /> Location:
            </span>
            <span className={`font-medium text-right max-w-[200px] truncate ${isDark ? 'text-[#F3E9DC]' : 'text-[#241E19]'}`}>
              {BRAND_INFO.location}
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          id="close-success-modal-btn"
          onClick={onClose}
          className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer ${
            isDark
              ? 'text-[#171614] bg-[#C2A386] hover:bg-[#DFCAAF]'
              : 'text-[#FFFFFF] bg-[#9E7B5C] hover:bg-[#846447]'
          }`}
        >
          Return to Studio Showcase
        </button>
      </div>
    </div>
  );
};

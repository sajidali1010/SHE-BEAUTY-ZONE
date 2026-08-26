import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, Phone, Mail, User, CheckCircle2, ShieldCheck, MapPin, ExternalLink, Star } from 'lucide-react';
import { SERVICES_DATA, SIGNATURE_PACKAGES, BRAND_INFO } from '../data/salonData';
import { BookingFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface BookingSectionProps {
  initialServiceId?: string;
  onAppointmentBooked: (data: BookingFormData) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId = '',
  onAppointmentBooked,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceId: initialServiceId || 'bridal-makeover',
    preferredDate: '',
    preferredTime: '11:30 AM',
    guestsCount: '1 Person',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Set min date to tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onAppointmentBooked(formData);
    }, 600);
  };

  return (
    <section
      id="booking"
      className={`relative py-24 lg:py-32 overflow-hidden border-t transition-colors duration-500 ${
        isDark ? 'bg-[#141210] border-[#D8B273]/15' : 'bg-[#F3EFEA] border-[#966B3D]/20'
      }`}
    >
      {/* Ambient Lighting */}
      <div
        className={`absolute top-0 right-1/4 w-[35rem] h-[35rem] rounded-full blur-[160px] pointer-events-none ${
          isDark ? 'bg-[#D8B273]/6' : 'bg-[#966B3D]/8'
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
              Private Concierge & Booking
            </span>
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
          </div>

          <h2
            id="booking-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            Reserve Your <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Studio Session</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            Schedule your appointment or bridal discovery at She Beauty Zone in Bettiah. Our salon concierge will confirm your slot within 2 hours.
          </p>
        </div>

        {/* 2-Column Booking Form & Experience Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border ${
              isDark
                ? 'bg-[#1C1916] border-[#D8B273]/25 shadow-2xl'
                : 'bg-[#FFFFFF] border-[#966B3D]/30 shadow-xl'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6" id="appointment-form">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  <User className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                  <span>Full Name</span>
                  <span className={isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}>*</span>
                </label>
                <input
                  id="booking-fullname"
                  type="text"
                  placeholder="e.g. Anjali Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors ${
                    isDark
                      ? 'bg-[#161412] text-[#F9F6F0] placeholder-[#A89F91]/50 focus:ring-[#D8B273]'
                      : 'bg-[#FAF9F5] text-[#1E1915] placeholder-[#7D6E63]/60 focus:ring-[#966B3D]'
                  } ${
                    errors.fullName
                      ? 'border-red-400 border'
                      : isDark
                      ? 'border border-[#D8B273]/30 focus:border-[#D8B273]'
                      : 'border border-[#966B3D]/30 focus:border-[#966B3D]'
                  }`}
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Contact Row: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    <span>Phone Number</span>
                    <span className={isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}>*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    placeholder="e.g. +91 98354 00000"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors ${
                      isDark
                        ? 'bg-[#161412] text-[#F9F6F0] placeholder-[#A89F91]/50 focus:ring-[#D8B273]'
                        : 'bg-[#FAF9F5] text-[#1E1915] placeholder-[#7D6E63]/60 focus:ring-[#966B3D]'
                    } ${
                      errors.phoneNumber
                        ? 'border-red-400 border'
                        : isDark
                        ? 'border border-[#D8B273]/30 focus:border-[#D8B273]'
                        : 'border border-[#966B3D]/30 focus:border-[#966B3D]'
                    }`}
                  />
                  {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>

                <div className="space-y-1.5">
                  <label
                    className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    <Mail className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    <span>Email Address</span>
                    <span className={isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}>*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="e.g. anjali@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors ${
                      isDark
                        ? 'bg-[#161412] text-[#F9F6F0] placeholder-[#A89F91]/50 focus:ring-[#D8B273]'
                        : 'bg-[#FAF9F5] text-[#1E1915] placeholder-[#7D6E63]/60 focus:ring-[#966B3D]'
                    } ${
                      errors.email
                        ? 'border-red-400 border'
                        : isDark
                        ? 'border border-[#D8B273]/30 focus:border-[#D8B273]'
                        : 'border border-[#966B3D]/30 focus:border-[#966B3D]'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label
                  className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                  <span>Requested Service or Package</span>
                </label>
                <select
                  id="booking-service-select"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors cursor-pointer border ${
                    isDark
                      ? 'bg-[#161412] border-[#D8B273]/30 focus:border-[#D8B273] text-[#F9F6F0] focus:ring-[#D8B273]'
                      : 'bg-[#FAF9F5] border-[#966B3D]/30 focus:border-[#966B3D] text-[#1E1915] focus:ring-[#966B3D]'
                  }`}
                >
                  <optgroup label="Primary Services" className={isDark ? 'bg-[#161412] text-[#F9F6F0]' : 'bg-[#FAF9F5] text-[#1E1915]'}>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Signature Packages" className={isDark ? 'bg-[#161412] text-[#F9F6F0]' : 'bg-[#FAF9F5] text-[#1E1915]'}>
                    {SIGNATURE_PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Consultations" className={isDark ? 'bg-[#161412] text-[#F9F6F0]' : 'bg-[#FAF9F5] text-[#1E1915]'}>
                    <option value="consultation">Complimentary Beauty / Bridal Discovery (15 mins)</option>
                  </optgroup>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    <span>Preferred Date</span>
                    <span className={isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}>*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={minDate}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors ${
                      isDark
                        ? 'bg-[#161412] text-[#F9F6F0] focus:ring-[#D8B273]'
                        : 'bg-[#FAF9F5] text-[#1E1915] focus:ring-[#966B3D]'
                    } ${
                      errors.preferredDate
                        ? 'border-red-400 border'
                        : isDark
                        ? 'border border-[#D8B273]/30 focus:border-[#D8B273]'
                        : 'border border-[#966B3D]/30 focus:border-[#966B3D]'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>}
                </div>

                <div className="space-y-1.5">
                  <label
                    className={`text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                      isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                    }`}
                  >
                    <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    id="booking-time-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors cursor-pointer border ${
                      isDark
                        ? 'bg-[#161412] border-[#D8B273]/30 focus:border-[#D8B273] text-[#F9F6F0] focus:ring-[#D8B273]'
                        : 'bg-[#FAF9F5] border-[#966B3D]/30 focus:border-[#966B3D] text-[#1E1915] focus:ring-[#966B3D]'
                    }`}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Notes & Requests */}
              <div className="space-y-1.5">
                <label
                  className={`text-xs uppercase tracking-wider font-semibold flex items-center justify-between ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  <span>Special Requests or Event Details (Optional)</span>
                  <span className={`text-[10px] ${isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'}`}>
                    Bridal date, skin sensitivities, etc.
                  </span>
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  placeholder="Tell us about your event, preferred inspiration, or special accommodations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors resize-none border ${
                    isDark
                      ? 'bg-[#161412] border-[#D8B273]/30 focus:border-[#D8B273] text-[#F9F6F0] placeholder-[#A89F91]/50 focus:ring-[#D8B273]'
                      : 'bg-[#FAF9F5] border-[#966B3D]/30 focus:border-[#966B3D] text-[#1E1915] placeholder-[#7D6E63]/60 focus:ring-[#966B3D]'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-booking-form"
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                  isDark
                    ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C] shadow-[0_6px_25px_rgba(216,178,115,0.3)] hover:shadow-[0_8px_30px_rgba(216,178,115,0.5)]'
                    : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B] shadow-[0_6px_22px_rgba(150,107,61,0.25)] hover:shadow-[0_8px_28px_rgba(150,107,61,0.35)]'
                }`}
              >
                {isSubmitting ? (
                  <span>Securing Suite...</span>
                ) : (
                  <>
                    <span>Request Appointment</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <div
                className={`flex items-center justify-center gap-2 text-[11px] text-center ${
                  isDark ? 'text-[#DDD4C7]' : 'text-[#5E5146]'
                }`}
              >
                <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                <span>Zero pre-payment required. Full flexibility up to 24h prior.</span>
              </div>
            </form>
          </div>

          {/* Right Column: Studio Experience, Location & Google Profile */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google Verified Location & Directions Card */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border space-y-4 ${
                isDark
                  ? 'bg-[#1C1916] border-[#D8B273]/35 shadow-xl'
                  : 'bg-[#FFFFFF] border-[#966B3D]/35 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                      isDark
                        ? 'bg-[#0E0D0B] border-[#D8B273]/40 text-[#D8B273]'
                        : 'bg-[#F3EFEA] border-[#966B3D]/40 text-[#966B3D]'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`font-serif text-lg font-normal ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
                      Salon Location
                    </h3>
                    <p className={`text-[11px] font-semibold ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`}>
                      Opposite Old Post Office
                    </p>
                  </div>
                </div>

                {/* Google Rating Badge */}
                <a
                  href={BRAND_INFO.googleShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-opacity hover:opacity-80 ${
                    isDark
                      ? 'bg-[#0E0D0B] border-[#D8B273]/40 text-[#D8B273]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/40 text-[#966B3D]'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1E1915]'}`}>{BRAND_INFO.rating}</span>
                  <span className={`text-[10px] ${isDark ? 'text-[#DDD4C7]/80' : 'text-[#4A3E35]/80'}`}>({BRAND_INFO.reviewCount})</span>
                </a>
              </div>

              <div className={`space-y-1 text-xs font-light leading-relaxed ${isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'}`}>
                <p className="font-semibold">{BRAND_INFO.address}</p>
                <p>{BRAND_INFO.city}</p>
              </div>

              {/* Action Buttons for Google Link & Directions */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  id="booking-google-maps-btn"
                  href={BRAND_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold tracking-wider text-center transition-all flex items-center justify-center gap-1.5 ${
                    isDark
                      ? 'bg-[#0E0D0B] border-[#D8B273]/40 text-[#ECC88C] hover:border-[#D8B273]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/40 text-[#7D552B] hover:border-[#966B3D]'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="booking-google-share-link"
                  href={BRAND_INFO.googleShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`py-2.5 px-4 rounded-xl border text-xs font-semibold tracking-wider text-center transition-all flex items-center justify-center gap-1.5 ${
                    isDark
                      ? 'border-[#D8B273]/30 text-[#D8B273] hover:bg-[#D8B273]/10'
                      : 'border-[#966B3D]/35 text-[#966B3D] hover:bg-[#966B3D]/10'
                  }`}
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Email Assistance */}
            <div
              className={`p-6 rounded-2xl border space-y-3.5 ${
                isDark
                  ? 'bg-[#161412] border-[#D8B273]/25'
                  : 'bg-[#FFFFFF] border-[#966B3D]/25 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <p
                    className={`text-[10px] uppercase tracking-widest font-semibold ${
                      isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                    }`}
                  >
                    Need Immediate Assistance?
                  </p>
                  <p className={`text-sm font-serif ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
                    Speak with our Studio Concierge
                  </p>
                </div>

                <a
                  id="booking-direct-phone"
                  href={`tel:${BRAND_INFO.phone}`}
                  className={`px-4 py-2.5 rounded-full border text-xs font-semibold tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isDark
                      ? 'bg-[#1C1916] border-[#D8B273]/40 hover:border-[#D8B273] text-[#ECC88C]'
                      : 'bg-[#F3EFEA] border-[#966B3D]/40 hover:border-[#966B3D] text-[#7D552B]'
                  }`}
                >
                  <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                  <span>Call {BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Email direct line */}
              <div className={`pt-2 border-t flex items-center justify-between text-xs font-light ${isDark ? 'border-[#D8B273]/15 text-[#DDD4C7]' : 'border-[#966B3D]/20 text-[#4A3E35]'}`}>
                <span className="flex items-center gap-1.5">
                  <Mail className={`w-3.5 h-3.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                  <span>Direct Email:</span>
                </span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className={`font-semibold underline hover:opacity-80 ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Studio Hours Summary */}
            <div
              className={`p-6 rounded-2xl border space-y-2 ${
                isDark
                  ? 'bg-[#1C1916]/60 border-[#D8B273]/15'
                  : 'bg-[#FFFFFF] border-[#966B3D]/20 shadow-sm'
              }`}
            >
              <p
                className={`text-xs uppercase tracking-wider font-semibold ${
                  isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                }`}
              >
                Studio Hours (Bettiah)
              </p>
              <div
                className={`space-y-1 text-xs font-light ${
                  isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                }`}
              >
                {BRAND_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex justify-between py-1 border-b last:border-0 ${
                      isDark ? 'border-[#D8B273]/10' : 'border-[#966B3D]/15'
                    }`}
                  >
                    <span className={`font-medium ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>{h.days}</span>
                    <span className={isDark ? 'text-[#A89F91]' : 'text-[#7D6E63]'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Experience Points */}
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? 'bg-[#1C1916]/70 border-[#D8B273]/20'
                  : 'bg-[#FFFFFF] border-[#966B3D]/25 shadow-sm'
              }`}
            >
              <h4 className={`font-serif text-lg ${isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'}`}>
                Why Bettiah Chooses Us
              </h4>
              <ul className="space-y-2">
                {[
                  '18-Hour Waterproof HD Bridal Airbrush Makeup',
                  'Advanced Keratin, Nanoplastia & Permanent Straightening',
                  '100% Genuine Certified Cosmetics & Sanitized Suites',
                  'Personalized pre-bridal consultations and jewelry draping'
                ].map((point, idx) => (
                  <li key={idx} className={`flex items-start gap-2 text-xs font-light ${isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'}`}>
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


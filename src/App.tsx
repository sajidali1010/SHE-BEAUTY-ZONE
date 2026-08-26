/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { CommitmentSection } from './components/CommitmentSection';
import { StorySection } from './components/StorySection';
import { SignaturePackages } from './components/SignaturePackages';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AppointmentSuccessModal } from './components/AppointmentSuccessModal';
import { ServiceItem, BookingFormData } from './types';

function SalonApp() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledServiceId, setPrefilledServiceId] = useState<string>('makeup-makeover');
  const [completedBooking, setCompletedBooking] = useState<BookingFormData | null>(null);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setPrefilledServiceId(serviceId);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookingCompleted = (data: BookingFormData) => {
    setCompletedBooking(data);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative ${
        theme === 'dark'
          ? 'bg-[#0E0D0B] text-[#F9F6F0] selection:bg-[#D8B273] selection:text-[#0E0D0B]'
          : 'bg-[#FBF9F5] text-[#1E1915] selection:bg-[#966B3D] selection:text-[#FFFFFF]'
      }`}
    >
      {/* Sticky Header with Theme Switcher */}
      <Header onOpenBooking={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Services — Circular Editorial Showcase */}
        <ServicesShowcase
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceId) => scrollToBooking(serviceId)}
        />

        {/* 3. Our Commitment / Beauty With Purpose */}
        <CommitmentSection />

        {/* 4. Our Story & Asymmetric Layered Narrative */}
        <StorySection />

        {/* 5. Signature Experiences & Packages */}
        <SignaturePackages
          onBookPackage={(packageTitle) => scrollToBooking(packageTitle)}
        />

        {/* 6. Editorial Portfolio & Transformations Gallery */}
        <GallerySection
          onBookLook={(lookTitle) => scrollToBooking(lookTitle)}
        />

        {/* 7. Client Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 8. Conversion CTA Banner */}
        <ConversionCTA
          onOpenBooking={() => scrollToBooking()}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 9. Appointment Booking Section */}
        <BookingSection
          initialServiceId={prefilledServiceId}
          onAppointmentBooked={handleBookingCompleted}
        />
      </main>

      {/* 10. Luxury Footer */}
      <Footer onNavClick={(targetId) => scrollToSection(targetId)} />

      {/* Floating Mobile CTA */}
      <FloatingMobileCTA onOpenBooking={() => scrollToBooking()} />

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          setSelectedService(null);
          scrollToBooking(serviceId);
        }}
      />

      <AppointmentSuccessModal
        booking={completedBooking}
        onClose={() => setCompletedBooking(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SalonApp />
    </ThemeProvider>
  );
}

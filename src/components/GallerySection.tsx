import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface GallerySectionProps {
  onBookLook: (lookTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookLook }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'makeup', label: 'Makeup Artistry' },
    { id: 'bridal', label: 'Bridal Makeovers' },
    { id: 'hair', label: 'Haute Hair' },
    { id: 'skincare', label: 'Skin & Glow' },
    { id: 'nails', label: 'Nail Art' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#141210]' : 'bg-[#F3EFEA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
            <span
              className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
              }`}
            >
              Transformations & Artistry
            </span>
            <span className={`h-[1px] w-6 ${isDark ? 'bg-[#D8B273]/60' : 'bg-[#966B3D]/60'}`} />
          </div>

          <h2
            id="gallery-heading"
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
              isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
            }`}
          >
            Editorial <span className={`italic font-light ${isDark ? 'text-[#ECC88C]' : 'text-[#966B3D]'}`}>Portfolio</span>
          </h2>

          <p
            className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
            }`}
          >
            A glimpse into the real transformations crafted in our private studio suites. Click any portrait to view in high definition.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 font-semibold ${
                  activeFilter === filter.id
                    ? isDark
                      ? 'bg-[#D8B273] text-[#0E0D0B] shadow-[0_2px_15px_rgba(216,178,115,0.35)]'
                      : 'bg-[#966B3D] text-[#FFFFFF] shadow-[0_2px_15px_rgba(150,107,61,0.3)]'
                    : isDark
                    ? 'bg-[#1C1916] text-[#DDD4C7] border border-[#D8B273]/20 hover:border-[#D8B273]/60 hover:text-[#F9F6F0]'
                    : 'bg-[#FFFFFF] text-[#4A3E35] border border-[#966B3D]/25 hover:border-[#966B3D]/60 hover:text-[#1E1915]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const isTall = idx % 3 === 0;

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                  isDark
                    ? 'bg-[#1C1916] border-[#D8B273]/20 hover:border-[#D8B273]/60 shadow-xl'
                    : 'bg-[#FFFFFF] border-[#966B3D]/25 hover:border-[#966B3D]/60 shadow-md'
                } ${isTall ? 'sm:row-span-2 aspect-[3/4] sm:aspect-auto' : 'aspect-[4/5]'}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Editorial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B]/90 via-[#0E0D0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between" />

                {/* Tag on Top */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2.5 py-1 rounded-full backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-semibold border ${
                      isDark
                        ? 'bg-[#0E0D0B]/85 text-[#D8B273] border-[#D8B273]/35'
                        : 'bg-[#FFFFFF]/90 text-[#7D552B] border-[#966B3D]/40 shadow-sm'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Hover Details on Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#D8B273] font-semibold">
                    {item.categoryLabel}
                  </p>
                  <h3 className="font-serif text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="pt-2 flex items-center gap-1 text-xs text-[#ECC88C] font-sans font-medium">
                    <span>View Transformation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Luxury Lightbox Modal */}
      {selectedImage && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#ECC88C] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#ECC88C] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#ECC88C] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className={`relative max-w-4xl w-full border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] ${
              isDark
                ? 'bg-[#161412] border-[#D8B273]/30'
                : 'bg-[#FAF9F5] border-[#966B3D]/35'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Column */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info Column */}
            <div
              className={`md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto ${
                isDark ? 'bg-[#161412]' : 'bg-[#FAF9F5]'
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full border text-[10px] uppercase tracking-[0.2em] font-semibold ${
                      isDark
                        ? 'bg-[#1C1916] border-[#D8B273]/40 text-[#D8B273]'
                        : 'bg-[#F3EFEA] border-[#966B3D]/40 text-[#7D552B]'
                    }`}
                  >
                    {selectedImage.categoryLabel}
                  </span>
                </div>

                <h3
                  className={`font-serif text-2xl sm:text-3xl ${
                    isDark ? 'text-[#F9F6F0]' : 'text-[#1E1915]'
                  }`}
                >
                  {selectedImage.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm font-light leading-relaxed ${
                    isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                  }`}
                >
                  {selectedImage.description}
                </p>

                <div
                  className={`p-4 rounded-xl border space-y-1 ${
                    isDark
                      ? 'bg-[#1C1916] border-[#D8B273]/15'
                      : 'bg-[#FFFFFF] border-[#966B3D]/20 shadow-sm'
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-wider font-semibold ${
                      isDark ? 'text-[#D8B273]' : 'text-[#966B3D]'
                    }`}
                  >
                    Artist Notes:
                  </p>
                  <p
                    className={`text-xs font-light ${
                      isDark ? 'text-[#DDD4C7]' : 'text-[#4A3E35]'
                    }`}
                  >
                    Customized skin prep using hyaluronic hydration and bespoke mink lash clusters for photogenic definition.
                  </p>
                </div>
              </div>

              <div
                className={`pt-4 border-t ${
                  isDark ? 'border-[#D8B273]/20' : 'border-[#966B3D]/20'
                }`}
              >
                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    onBookLook(title);
                  }}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    isDark
                      ? 'text-[#0E0D0B] bg-[#D8B273] hover:bg-[#ECC88C]'
                      : 'text-[#FFFFFF] bg-[#966B3D] hover:bg-[#7D552B]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Exact Look</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

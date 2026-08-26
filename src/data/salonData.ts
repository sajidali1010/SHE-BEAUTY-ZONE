import { ServiceItem, CommitmentFeature, SignaturePackage, GalleryItem, Testimonial } from '../types';

export const BRAND_INFO = {
  name: 'SHE BEAUTY ZONE',
  tagline: 'Luxury Hair, Bridal Makeover, Skin & Spa Studio',
  subtitle: 'Bettiah’s premier beauty destination established in 2015 — specialized in bespoke HD bridal makeovers, keratin & hair straightening, clinical facials, and luxury nail artistry.',
  phone: '+91 98354 21890',
  phoneDisplay: '+91 98354 21890',
  alternatePhone: '+91 87147 90112',
  email: 'sajidali10102000@gmail.com',
  address: 'BS-003-0109, 1st Floor, Opposite Old Post Office, Christian Quarter Road',
  location: 'Opposite Old Post Office, Christian Quarter Road, Bettiah, Bihar 845438',
  landmark: 'Opposite Old Post Office',
  city: 'Bettiah, West Champaran, Bihar - 845438',
  googleShareUrl: 'https://share.google/BOlwCnPXOoQso4gL1',
  googleMapsUrl: 'https://maps.google.com/?q=She+Beauty+Zone+Opposite+Old+Post+Office+Christian+Quarter+Road+Bettiah+Bihar+845438',
  establishedYear: '2015',
  rating: 4.7,
  reviewCount: 76,
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 08:00 PM' },
    { days: 'Sunday', time: '10:30 AM – 07:00 PM' },
    { days: 'Bridal Bookings', time: 'Early Morning & VIP Slots on Request' }
  ],
  socials: {
    instagram: 'https://instagram.com/shebeautyzone',
    google: 'https://share.google/BOlwCnPXOoQso4gL1',
    facebook: 'https://facebook.com/shebeautyzone'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bridal-makeover',
    name: 'Bridal & Party Makeover',
    tagline: 'Royal HD Airbrush & Reception Elegance',
    description: 'Flawless 18-hour waterproof bridal makeup, sculpted contouring, customized eyelashes, and intricate dupatta/veil draping crafted for your special celebrations.',
    duration: '90 – 150 mins',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    highlights: ['HD Airbrush Waterproof Finish', 'Pre-Bridal Skin Priming', 'Dupatta & Jewelry Setting', 'Party & Engagement Looks']
  },
  {
    id: 'hair-treatments',
    name: 'Hair Styling & Keratin',
    tagline: 'Smoothening, Botox & Couture Cuts',
    description: 'Advanced Keratin therapy, Nanoplastia, Permanent Straightening, Botox treatment, and precision fashion haircuts tailored to frame your features.',
    duration: '60 – 180 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    highlights: ['Keratin & Hair Botox Infusion', 'Hair Straightening & Smoothening', 'Global Color & Balayage Highlights', 'Restorative Deep Hair Spa']
  },
  {
    id: 'skin-care',
    name: 'Aesthetic Skin & Facials',
    tagline: 'Hydra-Glow & Instant Radiance',
    description: 'Ultrasonic deep pore cleansing, Hydra-Facials, Ayurvedic gold & diamond facials, and anti-tan therapies designed to unveil pure youthful glow.',
    duration: '60 – 90 mins',
    image: '/aesthetic_skin_facial.png',
    highlights: ['Hydra-Infusion Glow Therapy', 'Gold & Diamond Bridal Facial', 'Organic D-Tan & Brightening Peel', 'Acupressure Face Rejuvenation']
  },
  {
    id: 'nail-studio',
    name: 'Nail Studio & Extensions',
    tagline: 'Artisanal Acrylics & Gel Art',
    description: 'Durable acrylic & builder gel extensions, glamorous chrome accents, bridal custom nail art, Russian dry manicure, and relaxing spa pedicures.',
    duration: '45 – 80 mins',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    highlights: ['Acrylic & Gel Extensions', 'Bridal Shimmer & Chrome Art', 'Russian Structured Manicure', 'Aromatherapy Foot Spa Pedicure']
  },
  {
    id: 'spa-wellness',
    name: 'Body Spa & Threading',
    tagline: 'Herbal Polishing & Sensory Reset',
    description: 'Full-body herbal polishing, relaxing head massage with warm oils, gentle Rica waxing, and precision eyebrow threading in a hygienic private suite.',
    duration: '45 – 120 mins',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    highlights: ['Herbal Full Body Polishing', 'Traditional Scalp Oil Massage', 'Painless Rica Brazilian/Body Waxing', 'Precision Eyebrow Architecture']
  }
];

export const COMMITMENT_FEATURES: CommitmentFeature[] = [
  {
    id: 'purpose',
    icon: 'sparkles',
    title: 'Beauty With Purpose',
    description: 'Personalized styling designed to enhance your innate elegance and authentic confidence for life’s grandest celebrations and daily radiance.'
  },
  {
    id: 'products',
    icon: 'shield',
    title: 'Premium Brand Products',
    description: 'We strictly use certified international cosmetics (MAC, Kryolan, L’Oréal Professionnel, Schwarzkopf, Lotus Organics) ensuring skin safety and long-lasting perfection.'
  },
  {
    id: 'professionals',
    icon: 'award',
    title: 'Expert Stylists Since 2015',
    description: 'Over 9+ years of trusted bridal and salon expertise in Bettiah, delivering consistent 4.7-star rated artistry with courteous, caring service.'
  },
  {
    id: 'sanctuary',
    icon: 'heart',
    title: 'Hygienic & Private Suite',
    description: 'Clean, air-conditioned, low-stimulus private suites with 100% sterilized tools where your comfort and privacy are always prioritized.'
  }
];

export const SIGNATURE_PACKAGES: SignaturePackage[] = [
  {
    id: 'royal-bridal',
    title: 'Royal Bridal Signature Suite',
    tagline: 'The Ultimate Wedding Day Masterpiece',
    description: 'Our flagship bridal package including pre-bridal skin therapy, 18-hour HD Airbrush makeup, luxury hair design, jewelry & dupatta styling, and bridal touch-up kit.',
    duration: '3.5 Hours',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    badge: 'Flagship Bridal',
    includedServices: [
      'Pre-Bridal Hydra Radiance Facial',
      'HD Airbrush Waterproof Bridal Makeup',
      'Designer Hair Styling & Floral/Veil Setting',
      'Sari/Dupatta & Bridal Jewelry Styling'
    ]
  },
  {
    id: 'keratin-makeover',
    title: 'Hair Revival & Glow Experience',
    tagline: 'Silk Smooth Hair & Luminous Skin',
    description: 'Complete transformation combining deep keratin/botox hair smoothening, precision haircut, and an instant glow enzymatic facial.',
    duration: '3 Hours',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Value',
    includedServices: [
      'Advanced Keratin or Botox Infusion',
      'Precision Cut & High-Gloss Styling',
      'Hydra-Oxygen Facial Cleansing',
      'Relaxing Scalp & Shoulder Acupressure'
    ]
  },
  {
    id: 'complete-makeover',
    title: 'Party Glam & Spa Day Retreat',
    tagline: 'Full Sensory Pampering for Special Events',
    description: 'An indulgent half-day private suite experience covering skin brightening, hair blowout, manicure, pedicure, and glamorous party makeup.',
    duration: '4 Hours',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    badge: 'VIP Celebration',
    includedServices: [
      'Instant Glow D-Tan Skin Brightener',
      'Designer Party / Engagement Makeover',
      'Spa Manicure & Pedicure with Gel Finish',
      'Couture Waves / Updo Blowout'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Royal Indian Bridal Radiance',
    category: 'bridal',
    categoryLabel: 'Bridal Makeover',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    description: 'Flawless HD bridal glow with defined kajal, warm gold shimmer, and traditional jewel balance.',
    tag: 'Royal Bridal'
  },
  {
    id: 'g2',
    title: 'Silk Keratin & Sleek Blowout',
    category: 'hair',
    categoryLabel: 'Haute Hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
    description: 'Intense keratin nourishment and glass-like silk shine with featherweight movement.',
    tag: 'Keratin Care'
  },
  {
    id: 'g3',
    title: 'Golden Hour Engagement Glam',
    category: 'makeup',
    categoryLabel: 'Makeup Artistry',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    description: 'Warm champagne shimmer with sculpted contour and velvet nude finish for engagement parties.',
    tag: 'Engagement'
  },
  {
    id: 'g4',
    title: 'Hydra-Facial Dewy Skin Rejuvenation',
    category: 'skincare',
    categoryLabel: 'Skin & Glow',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    description: 'Ultrasonic pore cleansing and hyaluronic infusion revealing vibrant inner luminosity.',
    tag: 'Aesthetic Skin'
  },
  {
    id: 'g5',
    title: 'Bridal Shimmer Acrylic Nails',
    category: 'nails',
    categoryLabel: 'Nail Artistry',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    description: 'Almond structured extensions with rose-gold glitter ombré and protective gloss seal.',
    tag: 'Bridal Nails'
  },
  {
    id: 'g6',
    title: 'Dimensional Balayage & Waves',
    category: 'hair',
    categoryLabel: 'Haute Hair',
    image: 'https://images.unsplash.com/photo-1522337094346-290f26a121f0?auto=format&fit=crop&w=900&q=80',
    description: 'Warm espresso and caramel balayage styled into glossy cascading voluminous curls.',
    tag: 'Hair Color'
  },
  {
    id: 'g7',
    title: 'Smoky Siren Eyes & Contour',
    category: 'makeup',
    categoryLabel: 'Makeup Artistry',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80',
    description: 'Deep chocolate smoky blend with customized feather-light silk lash clusters.',
    tag: 'Evening Glam'
  },
  {
    id: 'g8',
    title: 'Intricate Bridal Floral Updo',
    category: 'bridal',
    categoryLabel: 'Bridal Makeover',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=80',
    description: 'Textured romantic bridal chignon accessorized with fresh flowers and secure maang tikka.',
    tag: 'Bridal Hair'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Pooja Kumari',
    serviceType: 'Royal Bridal Signature Suite',
    quote: 'She Beauty Zone made my wedding day unforgettable! The bridal makeup was completely waterproof and stayed flawless throughout the entire night. Highly recommended in Bettiah!',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 't2',
    clientName: 'Ananya Sharma',
    serviceType: 'Keratin Treatment & Haircut',
    quote: 'Best hair salon in Bettiah! My frizzy hair got completely transformed with their keratin treatment. The staff is so polite, cooperative, and highly skilled.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 't3',
    clientName: 'Neha Verma',
    serviceType: 'Hydra-Facial & Glow Therapy',
    quote: 'Super relaxing and hygienic salon opposite Old Post Office. The facial gave my skin an instant radiant glow. 4.7 stars well-deserved!',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 't4',
    clientName: 'Sana Fatima',
    serviceType: 'Party Makeover & Nail Art',
    quote: 'Loved the ambiance and aesthetic suite. The makeup artist listened to what I wanted and gave me a subtle yet glowing makeover for my cousin’s reception.',
    rating: 5,
    date: 'December 2025'
  }
];


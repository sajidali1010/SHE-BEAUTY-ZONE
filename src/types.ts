export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  isFeatured?: boolean;
  highlights: string[];
}

export interface CommitmentFeature {
  id: string;
  icon: 'sparkles' | 'award' | 'users' | 'heart' | 'leaf' | 'shield';
  title: string;
  description: string;
}

export interface SignaturePackage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  badge: string;
  includedServices: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'makeup' | 'bridal' | 'hair' | 'skincare' | 'nails';
  categoryLabel: string;
  image: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceType: string;
  quote: string;
  rating: number;
  date: string;
  avatar?: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  guestsCount: string;
  notes: string;
}

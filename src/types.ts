export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string; // Lucide icon name
  duration: string;
  category: 'hair' | 'makeup' | 'nails' | 'piercing';
  price: number; // in Ghana Cedis (GHS / GH₵)
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

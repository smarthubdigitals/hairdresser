import { Service } from './types';

export const BUSINESS_INFO = {
  name: "Say's Looks and Artistry",
  tagline: "Professional and Relaxing Service",
  logoText: "SAY'S",
  subLogoText: "LOOKS AND ARTISTERY",
  phoneNumbers: ["0246141334", "0551678150"],
  phoneNumbersFormatted: ["+233 24 614 1334", "+233 55 167 8150"],
  emails: ["sayslooks@gmail.com"], // professional fallback
  address: "Spintex Road, block 4B, Accra, Ghana",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.82885915228!2d-0.198305!3d5.603717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  hours: [
    { days: "Monday - Saturday", hours: "8:00 AM - 8:00 PM" },
    { days: "Sunday", hours: "1:00 PM - 7:00 PM" }
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com/says_looks_artistry", handle: "@says_looks_artistry" },
    { platform: "TikTok", url: "https://tiktok.com/@says_looks_artistry", handle: "@says_looks_artistry" },
    { platform: "WhatsApp", url: "https://wa.me/233246141334", handle: "+233 24 614 1334" },
    { platform: "Facebook", url: "https://facebook.com/says_looks_artistry", handle: "Say's Looks & Artistry" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "makeup",
    name: "Professional Makeup",
    description: "Glamorous, high-fashion, bridal, and editorial makeup artistry tailored to your skin tone and event theme. Includes lash application.",
    image: "/src/assets/images/makeup_and_hair_model_1783938126321.jpg",
    icon: "Sparkles",
    duration: "1h 30m",
    category: "makeup"
  },
  {
    id: "hair",
    name: "Hair Styling & Styling Care",
    description: "Premium hair washing, styling, and revitalizing treatments designed to keep your hair healthy, hydrated, and radiant.",
    image: "/src/assets/images/luxury_salon_hero_1783938111589.jpg", // placeholder beauty salon
    icon: "Scissors",
    duration: "1h - 2h",
    category: "hair"
  },
  {
    id: "piercing",
    name: "Body & Nose Piercing",
    description: "Safe, sterile, and professional body and facial piercing services using high-quality surgical grade steel and gold jewelry.",
    image: "/src/assets/images/makeup_and_hair_model_1783938126321.jpg", // secondary
    icon: "ShieldAlert",
    duration: "20m",
    category: "piercing"
  },
  {
    id: "wigs-making",
    name: "Custom Wigs Making",
    description: "Expert crafting of custom-fit wigs from premium bundles, detailed customization, knot bleaching, and styling to your preference.",
    image: "/src/assets/images/makeup_and_hair_model_1783938126321.jpg",
    icon: "Crown",
    duration: "2d - 4d",
    category: "hair"
  },
  {
    id: "micro-braiding",
    name: "Micro Braiding & Braids",
    description: "Extremely neat and long-lasting micro braids, knotless braids, and customized protective styles woven by braiding experts.",
    image: "/src/assets/images/micro_braids_style_1783938190683.jpg",
    icon: "Flame",
    duration: "4h - 8h",
    category: "hair"
  },
  {
    id: "pedicure-manicure",
    name: "Pedicure & Manicure",
    description: "Relaxing spa manicure and pedicure treatments. Includes nail shaping, cuticle care, custom acrylic/gel extensions, and luxurious nail art.",
    image: "/src/assets/images/manicure_nail_art_1783938142498.jpg",
    icon: "Hand",
    duration: "1h 15m",
    category: "nails"
  },
  {
    id: "frontal-installation",
    name: "Frontal & Lace Installation",
    description: "Flawless frontal and closure lace installation with precise melting, natural baby hairs (optional), sewing, and custom styling.",
    image: "/src/assets/images/micro_braids_style_1783938190683.jpg",
    icon: "Layers",
    duration: "2h",
    category: "hair"
  },
  {
    id: "lash-extensions",
    name: "Premium Lash Extensions",
    description: "Classic, volume, and hybrid eyelash extensions individually placed to add incredible length, depth, and volume to your eyes.",
    image: "/src/assets/images/makeup_and_hair_model_1783938126321.jpg",
    icon: "Eye",
    duration: "1h 45m",
    category: "makeup"
  }
];

export const GALLERY_IMAGES = [
  {
    title: "Signature Glam",
    desc: "Luxury makeup application",
    src: "/src/assets/images/makeup_and_hair_model_1783938126321.jpg"
  },
  {
    title: "Nail Art Perfection",
    desc: "Custom pedicure and manicure styling",
    src: "/src/assets/images/manicure_nail_art_1783938142498.jpg"
  },
  {
    title: "Expert Micro Braiding",
    desc: "Intricate protective braiding styles",
    src: "/src/assets/images/micro_braids_style_1783938190683.jpg"
  },
  {
    title: "Premium Salon Lounge",
    desc: "Our relaxing and luxurious space",
    src: "/src/assets/images/luxury_salon_hero_1783938111589.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "Amara Mensah",
    role: "Regular Client",
    comment: "Say's Looks transformed my hair and makeup for my wedding! The frontal installation was perfectly melted, and the makeup stayed pristine all day. Truly the best in Accra!",
    rating: 5
  },
  {
    name: "Efua Boateng",
    role: "Local Google Guide",
    comment: "The micro braids here are so neat and painless. Friendly staff, luxurious setting, and very professional. Highly recommend their pedicure too!",
    rating: 5
  },
  {
    name: "Naa Adjei",
    role: "Fashion Model",
    comment: "Always my go-to for photoshoots. Their makeup artist is incredibly talented and understands lighting perfectly. Piercing was clean and fast too!",
    rating: 5
  }
];

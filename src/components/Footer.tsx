import { Heart, Sparkles, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-stone-950 border-t border-stone-900 py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-900">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex flex-col items-start group">
              <span className="font-serif text-2xl tracking-widest text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5 font-bold">
                {BUSINESS_INFO.logoText} <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              </span>
              <span className="text-[9px] tracking-[0.25em] text-amber-400 font-medium font-sans">
                {BUSINESS_INFO.subLogoText}
              </span>
            </a>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed font-sans font-light">
              We specialize in creating flawless makeup looks, expert wigs making, frontal lace melting, and luxury braiding. Located in Accra, Ghana, dedicated to professional and relaxing service.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold font-sans">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="text-stone-400 hover:text-amber-400 transition-colors">Home Base</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-amber-400 transition-colors">Specialty Menu</a></li>
              <li><a href="#gallery" className="text-stone-400 hover:text-amber-400 transition-colors">About & Gallery</a></li>
              <li><a href="#reviews" className="text-stone-400 hover:text-amber-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Column 3: Contacts Summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold font-sans">Connect with Salon</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2.5 text-stone-400 items-start">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex gap-2.5 text-stone-400 items-center">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`} className="hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.phoneNumbersFormatted[0]}
                </a>
              </div>
              <div className="flex gap-2.5 text-stone-400 items-center">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Tagline: "{BUSINESS_INFO.tagline}"</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs sm:text-sm">
          <p>© {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Accra, Ghana</span>
            <span>•</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">Privacy & Styling Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

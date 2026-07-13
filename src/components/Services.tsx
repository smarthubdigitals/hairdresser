import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Scissors,
  ShieldAlert,
  Crown,
  Flame,
  Hand,
  Layers,
  Eye,
  Clock,
  ArrowRight,
  Info,
  Calendar,
  X,
  Phone
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { Service } from '../types';

export default function Services() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to render correct icon
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Crown': return <Crown className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Hand': return <Hand className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Eye': return <Eye className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'hair', name: 'Hair & Wigs' },
    { id: 'makeup', name: 'Makeup & Lashes' },
    { id: 'nails', name: 'Nails' },
    { id: 'piercing', name: 'Piercing' },
  ];

  const filteredServices = SERVICES.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'hair') return service.category === 'hair';
    if (filter === 'makeup') return service.category === 'makeup' || service.id === 'lash-extensions';
    if (filter === 'nails') return service.category === 'nails';
    if (filter === 'piercing') return service.category === 'piercing';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-stone-900/50 border-t border-b border-stone-900 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase block">
            OUR COMPREHENSIVE MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Exquisite Artistry & Hair Care
          </h2>
          <p className="text-stone-400 text-base max-w-2xl mx-auto font-sans">
            Explore our curated selection of beauty treatments and styling specialties. Crafted to elevate your look and provide a relaxing, high-end experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.id}`}
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wide font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/10'
                  : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={service.id}
                className="group bg-stone-900/40 border border-stone-800/80 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:bg-stone-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                    
                    {/* Floating Icon badge */}
                    <div className="absolute bottom-4 left-4 bg-amber-500 text-stone-950 p-2.5 rounded-xl shadow-md">
                      {renderIcon(service.icon, "w-5 h-5")}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-stone-400 text-sm line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer details inside Card */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-800/40 mt-auto">
                  <div className="flex items-center gap-1.5 text-stone-400 text-xs">
                    <Clock className="w-3.5 h-3.5 text-amber-500/70" />
                    <span>Est. {service.duration}</span>
                  </div>
                  
                  <button
                    id={`service-more-info-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold group-hover:text-amber-300 transition-colors"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Consultation Promo Box */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 border border-stone-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-sans">
              <Calendar className="w-3.5 h-3.5" />
              Flexible Bookings
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Ready to accent your natural beauty?
            </h3>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Have unique requirements or ready to book a dedicated slot? Send us a quick inquiry or call our team directly for a tailored consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              id="services-promo-call-btn"
              href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
              className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 text-white font-semibold py-3.5 px-6 rounded-full text-sm tracking-wide transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              Call Salon
            </a>
            <a
              id="services-promo-book-btn"
              href="#contact"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3.5 px-6 rounded-full text-sm tracking-wide shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Lightbox Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            id="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              id="service-modal-content"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-stone-950/60 hover:bg-stone-950 text-stone-400 hover:text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-stone-950/60 px-2.5 py-1 rounded-full">
                    {selectedService.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="flex flex-wrap gap-4 items-center justify-between border-t border-b border-stone-800/80 py-4 text-sm">
                  <div className="flex items-center gap-2 text-stone-300">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="font-medium">Estimated Time:</span>
                    <span className="text-stone-400">{selectedService.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-300">
                    <Info className="w-4 h-4 text-amber-500" />
                    <span className="font-medium">Service Type:</span>
                    <span className="text-stone-400 capitalize">{selectedService.category}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    id="modal-direct-booking-call"
                    href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-300 font-semibold py-3.5 rounded-xl transition-all"
                    onClick={() => setSelectedService(null)}
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    Call to Book Now
                  </a>
                  <a
                    id="modal-direct-booking-form"
                    href="#contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3.5 rounded-xl transition-all shadow-md"
                    onClick={() => setSelectedService(null)}
                  >
                    <Calendar className="w-4 h-4" />
                    Book on Website
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

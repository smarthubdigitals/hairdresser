import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ZoomIn, Heart, Sparkles, Award } from 'lucide-react';
import { GALLERY_IMAGES, BUSINESS_INFO } from '../data';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: About & Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase block">
                THE SAY'S STANDARD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Crafting Elegance, Inspiring Confidence
              </h2>
            </div>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-amber-400 font-semibold">Say's Looks and Artistry</strong>, we believe that your hair and beauty choices are an extension of your unique power and personality. 
              Located in the heart of Accra, our luxurious salon space offers a sanctuary where craft meets care.
            </p>

            {/* Core Values / Trust badges */}
            <div className="space-y-4 pt-4 border-t border-stone-900">
              <div className="flex gap-4 items-start">
                <div className="bg-amber-500/10 p-2.5 rounded-xl text-amber-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Artistry & Precision</h4>
                  <p className="text-stone-400 text-sm font-sans mt-0.5">Every line, curl, braid, and brushstroke is executed with masterful expertise to highlight your natural elegance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-500/10 p-2.5 rounded-xl text-amber-400 shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Relaxing Experience</h4>
                  <p className="text-stone-400 text-sm font-sans mt-0.5">We prioritize a tranquil, modern atmosphere where you can escape the rush and indulge in self-care.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-500/10 p-2.5 rounded-xl text-amber-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Premium Products Only</h4>
                  <p className="text-stone-400 text-sm font-sans mt-0.5">We use high-grade skin and hair treatments, lace adhesives, and sterilizing procedures for perfect, safe results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bento Visual Grid */}
          <div className="lg:col-span-7">
            <div className="space-y-4 mb-6 text-center lg:text-left">
              <span className="text-stone-400 text-xs sm:text-sm font-medium tracking-[0.1em] uppercase block">
                VISUAL SHOWCASE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Our Stunning Results
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative overflow-hidden rounded-2xl border border-stone-900 group cursor-pointer shadow-lg hover:border-amber-500/40 transition-all duration-500 ${
                    idx === 0 || idx === 3 ? 'h-64 sm:h-80' : 'h-48 sm:h-56'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Overlay text on hover */}
                  <div className="absolute inset-x-4 bottom-4 flex justify-between items-end text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div>
                      <p className="font-serif text-sm sm:text-base font-semibold text-white">{img.title}</p>
                      <p className="text-[10px] sm:text-xs text-amber-400 mt-0.5">{img.desc}</p>
                    </div>
                    <div className="bg-amber-500 text-stone-950 p-2 rounded-xl shadow-md hidden sm:block">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            id="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
              id="close-gallery-modal"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 p-3 rounded-full transition-colors z-10"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Slider Wrapper */}
            <div className="relative max-w-4xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Main Active Image */}
              <motion.div
                id="gallery-modal-image-container"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-stone-800 max-h-[70vh] w-auto shadow-2xl"
              >
                <img
                  src={GALLERY_IMAGES[activeImage].src}
                  alt={GALLERY_IMAGES[activeImage].title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </motion.div>

              {/* Prev / Next controls */}
              <button
                id="gallery-modal-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((activeImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
                }}
                className="absolute left-4 bg-stone-900/60 hover:bg-stone-900 text-white p-3 rounded-full transition-all focus:outline-none hidden sm:block"
              >
                &larr;
              </button>
              <button
                id="gallery-modal-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((activeImage + 1) % GALLERY_IMAGES.length);
                }}
                className="absolute right-4 bg-stone-900/60 hover:bg-stone-900 text-white p-3 rounded-full transition-all focus:outline-none hidden sm:block"
              >
                &rarr;
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="mt-6 text-center max-w-md px-4">
              <h4 className="font-serif text-lg font-bold text-white">{GALLERY_IMAGES[activeImage].title}</h4>
              <p className="text-sm text-stone-400 mt-1">{GALLERY_IMAGES[activeImage].desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

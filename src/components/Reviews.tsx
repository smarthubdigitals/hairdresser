import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-900/20 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Loved By Our Clients
          </h2>
          <p className="text-stone-400 text-base max-w-2xl mx-auto font-sans">
            Don't just take our word for it. Here is what some of our wonderful clients in Accra have to say about their transformations at Say's Looks and Artistry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-stone-900/60 border border-stone-800 p-8 rounded-2xl relative shadow-lg flex flex-col justify-between hover:border-amber-500/20 transition-colors duration-300 group"
            >
              {/* Quote Icon decorative */}
              <div className="absolute top-6 right-6 text-stone-800 group-hover:text-amber-500/10 transition-colors">
                <MessageSquareQuote className="w-10 h-10" />
              </div>

              <div className="space-y-4">
                {/* Stars Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic font-light">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-stone-800/60">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-bold font-serif text-amber-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold font-serif">{testimonial.name}</h4>
                  <p className="text-stone-500 text-xs mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

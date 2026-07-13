import { motion } from 'motion/react';
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/luxury_salon_hero_1783938111589.jpg"
          alt="Say's Looks and Artistry Salon"
          className="w-full h-full object-cover object-center scale-105 filter brightness-25 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-stone-950/50" />
      </div>

      {/* Aesthetic Golden Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sparkles Decoration */}
      <div className="absolute top-20 right-[15%] text-amber-400/40 animate-pulse pointer-events-none hidden md:block">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-40 left-[10%] text-amber-400/30 animate-bounce pointer-events-none hidden md:block" style={{ animationDuration: '4s' }}>
        <Sparkles className="w-6 h-6" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            PREMIUM BEAUTY & HAIR ARTISTRY IN ACCRA
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            SAY'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 italic">
              Looks & Artistry
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-stone-300 text-base sm:text-lg md:text-xl max-w-xl font-sans font-light leading-relaxed"
          >
            Step into a world of ultimate sophistication. We craft jaw-dropping looks and healthy hairstyles tailored to your unique beauty. Explore our professional, relaxing service today.
          </motion.p>

          {/* Core Flyer Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 w-full max-w-md pt-2"
          >
            {[
              "Professional Makeup",
              "Expert Hair Styling",
              "Frontal Lace Installation",
              "Manicure & Pedicure"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-stone-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              id="hero-book-now-btn"
              href="#contact"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold uppercase tracking-wider text-sm py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              id="hero-view-services-btn"
              href="#services"
              className="flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 text-white font-medium tracking-wide text-sm py-4 px-8 rounded-full transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>

          {/* Contact Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-stone-800 w-full"
          >
            <div className="flex items-center gap-2 text-stone-400 text-sm">
              <span className="text-amber-500 font-semibold font-sans">Call:</span>
              <a href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`} className="hover:text-amber-400 font-medium transition-colors">
                {BUSINESS_INFO.phoneNumbersFormatted[0]}
              </a>
              <span className="text-stone-700">|</span>
              <a href={`tel:${BUSINESS_INFO.phoneNumbers[1]}`} className="hover:text-amber-400 font-medium transition-colors">
                {BUSINESS_INFO.phoneNumbersFormatted[1]}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Featured Image / Video Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Framed Exquisite Portrait representing "Say's Looks" */}
          <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/20 p-2 bg-stone-900/40 backdrop-blur-sm">
            <div className="w-full h-full rounded-xl overflow-hidden relative group">
              <img
                src="/src/assets/images/makeup_and_hair_model_1783938126321.jpg"
                alt="Flawless makeup and hair by Say's"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400 bg-stone-950/60 px-2.5 py-1 rounded-full">
                  Featured Artistry
                </span>
                <p className="font-serif text-xl text-white mt-2 font-medium">Say's Signature Looks</p>
                <p className="text-xs text-stone-300 mt-1">Stunning, flawless finish that accents natural beauty</p>
              </div>
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-amber-500/60 rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-amber-500/60 rounded-br-lg pointer-events-none" />
          </div>

          {/* Small floating info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-8 -left-4 sm:left-4 bg-stone-900/95 border border-stone-800 p-4 rounded-xl shadow-xl max-w-[200px] backdrop-blur-md hidden sm:block text-left"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-stone-400 uppercase tracking-widest font-semibold">We are open</span>
            </div>
            <p className="text-xs font-bold text-white mt-1">Mon - Sat: 8am - 8pm</p>
            <p className="text-[10px] text-stone-400 mt-0.5">Walk-ins & Bookings Welcome</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

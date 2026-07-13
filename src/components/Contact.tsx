import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Instagram,
  Facebook,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Formspree integration URL.
  // Standard practice is to post directly to formspree endpoint.
  // Users can customize this in their environment, or customize the formspree ID.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgnedle"; // Default demo / general endpoint

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New booking inquiry from ${formData.name} - Say's Looks`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Failed to send message. Please try again.");
        }
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus('error');
    }
  };

  // Helper to render correct social icon
  const renderSocialIcon = (platform: string, className = "w-5 h-5") => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram className={className} />;
      case 'facebook': return <Facebook className={className} />;
      case 'whatsapp': return <MessageSquare className={className} />;
      default: return <ExternalLink className={className} />;
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      {/* Decorative Gold Light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-stone-900/40 border border-stone-800/80 p-6 sm:p-10 rounded-3xl backdrop-blur-md shadow-xl relative">
            <div className="space-y-3 mb-8">
              <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase block">
                RESERVE YOUR GLAM SLOT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Book Consultation
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-sans">
                Fill in the form below to send an inquiry directly to our inbox via **Formspree**. We will review your selected slot and reach out to confirm your booking!
              </p>
            </div>

            {status === 'success' ? (
              <div id="booking-success-message" className="bg-emerald-500/10 border border-emerald-500/20 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h4 className="font-serif text-xl font-bold text-white">Inquiry Sent Successfully!</h4>
                <p className="text-stone-300 text-sm max-w-sm font-sans leading-relaxed">
                  Thank you for choosing Say's Looks and Artistry! Your booking details have been successfully received. We will call you within 2-4 hours to confirm.
                </p>
                <button
                  id="reset-booking-form-btn"
                  onClick={() => setStatus('idle')}
                  className="bg-stone-950 hover:bg-stone-800 text-stone-200 text-xs uppercase tracking-wider font-semibold py-2.5 px-6 rounded-full transition-all border border-stone-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form id="formspree-booking-form" onSubmit={handleSubmit} className="space-y-5">
                
                {status === 'error' && (
                  <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-center gap-3 text-rose-300 text-sm font-sans">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-stone-300 text-xs sm:text-sm font-medium">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Efua Mensah"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-stone-300 text-xs sm:text-sm font-medium">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 0246141334"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-stone-300 text-xs sm:text-sm font-medium">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. efua@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-stone-300 text-xs sm:text-sm font-medium">Service of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    >
                      <option value="" disabled>Select a specialty...</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.name}>{srv.name}</option>
                      ))}
                      <option value="Custom package">Multiple Specialties / CustomPackage</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="date" className="text-stone-300 text-xs sm:text-sm font-medium">Preferred Date *</label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="time" className="text-stone-300 text-xs sm:text-sm font-medium">Preferred Time *</label>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-stone-300 text-xs sm:text-sm font-medium">Special Requests & Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="e.g. frontal melting type, braids length, shape preference, skin sensitivities, or other details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-950/80 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  id="submit-booking-form"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-stone-800 text-stone-950 disabled:text-stone-500 font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></span>
                      Submitting Booking...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit to Formspree
                    </>
                  )}
                </button>

                <p className="text-[11px] text-stone-500 text-center font-sans">
                  * All bookings are vetted. A stylist will reach you by call to finalize times.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Location Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact info */}
            <div className="space-y-4">
              <span className="text-stone-400 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase block">
                LOCATE & CONNECT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Our Salon Hub
              </h3>
              <p className="text-stone-400 text-sm font-sans leading-relaxed">
                Step in for an unmatched styling pamper. Reach us anytime or follow our active visual feeds.
              </p>
            </div>

            {/* Direct Connect cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              <div className="bg-stone-900/30 border border-stone-800/60 p-5 rounded-2xl flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-semibold font-serif">Call to Book</h4>
                  <div className="flex flex-col text-sm text-stone-300">
                    <a href={`tel:${BUSINESS_INFO.phoneNumbers[0]}`} className="hover:text-amber-400 transition-colors font-medium">
                      {BUSINESS_INFO.phoneNumbersFormatted[0]}
                    </a>
                    <a href={`tel:${BUSINESS_INFO.phoneNumbers[1]}`} className="hover:text-amber-400 transition-colors font-medium">
                      {BUSINESS_INFO.phoneNumbersFormatted[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/30 border border-stone-800/60 p-5 rounded-2xl flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-semibold font-serif">Our Location</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="bg-stone-900/30 border border-stone-800/60 p-5 rounded-2xl flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-semibold font-serif">Salon Hours</h4>
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i} className="text-stone-300 text-sm">
                      <strong className="text-stone-400 font-medium">{h.days}:</strong> {h.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-stone-900/30 border border-stone-800/60 p-5 rounded-2xl flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-semibold font-serif">Email Inbox</h4>
                  <a href={`mailto:${BUSINESS_INFO.emails[0]}`} className="text-stone-300 text-sm hover:text-amber-400 transition-colors">
                    {BUSINESS_INFO.emails[0]}
                  </a>
                </div>
              </div>

            </div>

            {/* Social Feeds Panel */}
            <div className="space-y-3 pt-4">
              <h4 className="text-white text-xs uppercase tracking-widest font-semibold font-sans">
                Follow Say's Looks feeds
              </h4>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.socials.map((soc) => (
                  <a
                    id={`social-link-${soc.platform.toLowerCase()}`}
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/30 text-stone-300 hover:text-amber-400 py-2.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide font-medium transition-all"
                  >
                    {renderSocialIcon(soc.platform, "w-4 h-4 text-amber-500")}
                    <span>{soc.platform}</span>
                    <ExternalLink className="w-3 h-3 text-stone-600 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Location Map */}
            <div className="space-y-3">
              <h4 className="text-white text-xs uppercase tracking-widest font-semibold font-sans">
                Location Map (Accra, Ghana)
              </h4>
              <div id="interactive-location-map" className="relative w-full h-64 rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
                <iframe
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Say's Looks and Artistry Location Map"
                  className="filter grayscale invert contrast-110 brightness-80"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

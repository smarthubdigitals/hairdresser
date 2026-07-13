import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Elegantly styled high-end navigation header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative overflow-x-hidden">
        {/* Glamorous introduction banner and flyer highlights */}
        <Hero />

        {/* Dynamic menu list for hair, makeup, wigs, braiding, and nails */}
        <Services />

        {/* In-depth brand story & high-resolution result showcase */}
        <Gallery />

        {/* Social reviews to build client confidence */}
        <Reviews />

        {/* Booking details, interactive map, active schedules, and Formspree inquiry */}
        <Contact />
      </main>

      {/* Structured business footings and copyright declarations */}
      <Footer />
    </div>
  );
}

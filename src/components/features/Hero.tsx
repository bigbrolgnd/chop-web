import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1920"
          alt="Ministry team serving the community"
          className="w-full h-full object-cover"
        />
        {/* Warm gradient overlay using brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/90 via-brand-charcoal-dark/80 to-brand-charcoal/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-brand-gold/20 border border-brand-gold/40 rounded-full">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">
            Going Beyond The Walls
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
          Reaching the Lost.<br />
          <span className="text-brand-gold">
            Healing the Hurting.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-brand-silver leading-relaxed">
          We are a community dedicated to restoring{' '}
          <span className="text-white font-medium">mind, body, and soul</span> through
          faith, action, and boots-on-the-ground service in Fort Worth.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#mission"
            className="px-7 py-3 bg-brand-gold hover:bg-amber-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center"
          >
            Our Mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <Link
            to="/about"
            className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm border border-brand-silver/30 transition-all flex items-center justify-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

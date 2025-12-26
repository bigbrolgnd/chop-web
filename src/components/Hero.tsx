import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image - Simulating the "Team outside City View Apartments" */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Ministry team serving at City View Apartments"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-brand-gold/20 border border-brand-gold/40 rounded-full">
          <span className="text-brand-gold font-bold uppercase tracking-wider text-xs md:text-sm">
            Going Beyond The Walls
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Commissioned by God<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
            to Serve Our City
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          We are a ministry dedicated to restoring the <span className="text-white font-semibold">mind, body, and soul</span> of Fort Worth through faith, action, and boots-on-the-ground service.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#mission"
            className="px-8 py-3 bg-brand-gold hover:bg-yellow-500 text-black font-bold rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            Our Mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#community"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/30 transition-all flex items-center justify-center"
          >
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
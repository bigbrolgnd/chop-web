import { Home, Users, HeartHandshake } from 'lucide-react';

function WhoWeAre() {
  return (
    <section id="mission" className="py-16 bg-brand-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="section-subheading">
              Our Purpose
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Who We Are
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-gold rounded-full" />
            </h2>

            <p className="text-lg text-brand-steel mb-6 leading-relaxed">
              Community House of Prayer is more than a building; we are a movement
              commissioned by God to bring hope to the hopeless and restoration to
              the broken. We believe in meeting people exactly where they
              are—physically, spiritually, and emotionally.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              We are dedicated to serving the overlooked and underserved in our community:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-charcoal/10 flex items-center justify-center">
                  <Home className="h-5 w-5 text-brand-charcoal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">The Homeless</h4>
                  <p className="text-brand-steel">Providing dignity, resources, and spiritual support.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-charcoal/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-brand-charcoal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Youth & Families</h4>
                  <p className="text-brand-steel">Mentoring the next generation and strengthening family units.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-charcoal/10 flex items-center justify-center">
                  <HeartHandshake className="h-5 w-5 text-brand-charcoal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Seniors</h4>
                  <p className="text-brand-steel">Ensuring our elders are honored, cared for, and connected.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="h-64 md:h-96 lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000"
                  alt="Ministry team serving the community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full bg-brand-gold/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

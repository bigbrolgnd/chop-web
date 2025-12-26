import { MapPin } from 'lucide-react';

function CommunityEngagement() {
  return (
    <section id="community" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
             {/* Simulating the "City View Apartments" sign photo */}
            <div className="relative rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/seed/cityview/800/600" 
                 alt="Team standing in front of City View Apartments sign" 
                 className="w-full h-auto"
               />
               <div className="absolute bottom-4 right-4 bg-brand-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-lg">
                 <MapPin size={14} className="mr-1" /> On Location
               </div>
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Boots on the Ground at <span className="text-brand-gold">City View</span>
            </h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              We don't wait for the community to come to us; we go to them. Our partnership with residents at City View Apartments represents the heart of our ministry. 
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Through unity and consistent presence, we are building trust and transforming lives right where life happens—on the sidewalks, in the courtyards, and inside the homes of our neighbors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-brand-gold mb-1">Weekly Outreach</h4>
                <p className="text-sm text-blue-50">Food distribution and prayer walks every Saturday.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-brand-gold mb-1">Community Events</h4>
                <p className="text-sm text-blue-50">Back-to-school drives and holiday gatherings.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
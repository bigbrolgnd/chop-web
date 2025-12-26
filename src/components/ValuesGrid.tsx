import { BookOpen, HandHeart, Users, ShieldCheck, Flame, Anchor, Heart } from 'lucide-react';
import type { Pillar } from '@/types';

const pillars: Pillar[] = [
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description: "Standing firm on the unshakeable Word of God as our guide."
  },
  {
    icon: Flame,
    title: "Spirit-Led Prayer",
    description: "A house of prayer for all nations, interceding for our city."
  },
  {
    icon: HandHeart,
    title: "Compassionate Service",
    description: "Meeting physical needs to open doors for spiritual healing."
  },
  {
    icon: Users,
    title: "Authentic Community",
    description: "Building a family where everyone belongs and no one stands alone."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Operating with transparency, honesty, and accountability in all we do."
  },
  {
    icon: Anchor,
    title: "Hope",
    description: "Anchoring the soul in the promise of Christ's redemption."
  },
  {
    icon: Heart,
    title: "Unconditional Love",
    description: "Reflecting the love of Jesus to the lost, broken, and weary."
  }
];

function ValuesGrid() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-blue uppercase tracking-wide">Our Foundation</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">The 7 Pillars of Our Faith</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            These core values guide our decisions, shape our culture, and empower our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 flex flex-col items-center text-center ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2' : ''}`}
            >
              <div className="h-14 w-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
          
          {/* Decorative Callout for the 8th slot (since we have 7 items) */}
          <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-brand-blue rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-2">Join the Movement</h3>
            <p className="text-blue-100 text-center text-sm mb-4">Be a part of pillar #8: You.</p>
            <a href="#footer" className="bg-white text-brand-blue px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
import { BookOpen, Flame, HandHeart, Users, ShieldCheck, Anchor, Heart } from 'lucide-react';

interface Pillar {
  icon: typeof BookOpen;
  title: string;
  description: string;
}

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

function Beliefs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase font-semibold tracking-widest text-brand-blue mb-3">
            Our Foundation
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            The 7 Pillars of Our Faith
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            These core values guide our decisions, shape our culture, and empower our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <pillar.icon size={28} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Decorative CTA card */}
          <div className="bg-brand-blue rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-bold mb-2">Join the Movement</h4>
            <p className="text-blue-100 text-sm mb-4">Be a part of pillar #8: You.</p>
            <a
              href="/#partner"
              className="bg-white text-brand-blue px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beliefs;

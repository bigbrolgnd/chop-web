import { ReactNode } from 'react';
import { Heart, Users, BookOpen, Crown, Target } from 'lucide-react';
import AboutSection from '@/components/ui/AboutSection';

interface MinistryItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  scripture: string;
  scriptureRef: string;
  activities?: string[];
}

function MinistryItem({ icon, title, description, scripture, scriptureRef, activities }: MinistryItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
          {icon}
        </div>
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
      </div>
      <p className="text-brand-steel mb-3 text-sm leading-relaxed">{description}</p>
      {activities && activities.length > 0 && (
        <ul className="mb-3 space-y-1">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-2 text-brand-steel text-sm">
              <span className="text-brand-gold font-bold">•</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      )}
      <blockquote className="border-l-3 border-brand-gold pl-3 italic text-gray-600 text-sm">
        <p className="mb-1">"{scripture}"</p>
        <cite className="text-xs font-semibold text-brand-charcoal not-italic">— {scriptureRef}</cite>
      </blockquote>
    </div>
  );
}

function MissionVision() {
  const imageElement = (
    <div className="w-32 h-32 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center">
      <Target className="w-16 h-16 text-brand-gold" />
    </div>
  );

  const ministries: MinistryItemProps[] = [
    {
      icon: <Heart className="h-5 w-5 text-brand-charcoal" />,
      title: "Those In Need",
      description: "To serve unselfishly, meeting the physical, emotional, and spiritual needs of those in our Church, community, and the world while providing dignity, resources, and spiritual support.",
      scripture: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
      scriptureRef: "Matthew 25:40 (KJV)"
    },
    {
      icon: <Users className="h-5 w-5 text-brand-charcoal" />,
      title: "Family Ministry & Support",
      description: "The Family Ministry and Support team strengthens families and mentors the next generation through prayer, biblical guidance, and supportive relationships. We offer marriage enrichment, parenting workshops, grief support, visitations, and family-focused community events that build faith, unity, and hope.",
      scripture: "Bear ye one another's burdens, and so fulfil the law of Christ.",
      scriptureRef: "Galatians 6:2 (KJV)"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-brand-charcoal" />,
      title: "Youth Ministry",
      description: "Provides age-appropriate tools for success through dynamic Bible studies and practical life-event classes. We are committed to building strong spiritual foundations, teaching wise decision-making, and nurturing healthy relationships with family and friends—while offering exciting, fun activities that keep youth engaged and connected.",
      scripture: "Train up a child in the way he should go: and when he is old, he will not depart from it.",
      scriptureRef: "Proverbs 22:6 (KJV)"
    },
    {
      icon: <Crown className="h-5 w-5 text-brand-charcoal" />,
      title: "Seasoned Member Ministry",
      description: "Exists to honor, care for, and keep our elders connected within the body of Christ. Through love, respect, and support, we affirm their wisdom, dignity, and continued purpose in God's Kingdom.",
      scripture: "The hoary head is a crown of glory, if it be found in the way of righteousness.",
      scriptureRef: "Proverbs 16:31 (KJV)",
      activities: [
        "Prayer calls and encouragement check-ins",
        "Hospital, home, and care-facility visitation",
        "Transportation assistance for church services and appointments",
        "Fellowship gatherings and special recognition events",
        "Intergenerational mentorship and testimony sharing"
      ]
    }
  ];

  return (
    <AboutSection
      title="Our Purpose"
      heading="Mission & Vision"
      imageElement={imageElement}
    >
      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
        <p className="mb-4">
          Community House of Prayer is more than a building; we are a movement commissioned by
          God to bring hope to the hopeless and restoration to the broken. We believe in meeting
          people exactly where they are—physically, spiritually, and emotionally.
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
        <p className="mb-4">
          To see Fort Worth transformed by the love of Christ, one life at a time. We envision
          a community where no one is overlooked, where families are strengthened, and where
          hope is restored to those who have lost it.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-4">Who We Serve</h4>

        <p className="mb-4">
          The Church seeks to benefit everyone in the surrounding areas by providing opportunities
          for spiritual, physical, intellectual, social, and cultural development.
        </p>

        <p className="text-sm text-brand-charcoal mb-6 italic">
          "And Jesus increased in wisdom and stature, and in favour with God and man." — Luke 2:52 (KJV)
        </p>

        {/* Great Commandment & Great Commission */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-brand-silver/20 rounded-lg p-4 border-l-4 border-brand-gold">
            <h5 className="font-bold text-gray-900 mb-2 text-sm">The Great Commandment</h5>
            <p className="text-brand-steel text-xs leading-relaxed">
              "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.
              This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself."
            </p>
            <cite className="text-xs font-semibold text-brand-charcoal mt-2 block">— Matthew 22:37-39 (KJV)</cite>
          </div>
          <div className="bg-brand-silver/20 rounded-lg p-4 border-l-4 border-brand-charcoal">
            <h5 className="font-bold text-gray-900 mb-2 text-sm">The Great Commission</h5>
            <p className="text-brand-steel text-xs leading-relaxed">
              "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son,
              and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo,
              I am with you always, even unto the end of the world."
            </p>
            <cite className="text-xs font-semibold text-brand-charcoal mt-2 block">— Matthew 28:19-20 (KJV)</cite>
          </div>
        </div>

        {/* Ministry Cards */}
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {ministries.map((ministry, index) => (
            <MinistryItem key={index} {...ministry} />
          ))}
        </div>
      </div>
    </AboutSection>
  );
}

export default MissionVision;

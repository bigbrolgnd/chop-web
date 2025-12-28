import { Home, Users, HeartHandshake, Target } from 'lucide-react';
import AboutSection from '@/components/ui/AboutSection';

function MissionVision() {
  const imageElement = (
    <div className="w-32 h-32 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center">
      <Target className="w-16 h-16 text-brand-gold" />
    </div>
  );

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
          We are dedicated to serving the overlooked and underserved in our community:
        </p>

        <ul className="space-y-4 not-prose">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Home className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="ml-4">
              <h5 className="text-lg font-bold text-gray-900">The Homeless</h5>
              <p className="text-gray-500">Providing dignity, resources, and spiritual support.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Users className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="ml-4">
              <h5 className="text-lg font-bold text-gray-900">Youth & Families</h5>
              <p className="text-gray-500">Mentoring the next generation and strengthening family units.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
              <HeartHandshake className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="ml-4">
              <h5 className="text-lg font-bold text-gray-900">Seniors</h5>
              <p className="text-gray-500">Ensuring our elders are honored, cared for, and connected.</p>
            </div>
          </li>
        </ul>
      </div>
    </AboutSection>
  );
}

export default MissionVision;

import { Church } from 'lucide-react';
import AboutSection from '@/components/ui/AboutSection';

function ChurchHistory() {
  const imageElement = (
    <div className="w-32 h-32 mx-auto rounded-full bg-brand-charcoal/10 flex items-center justify-center">
      <Church className="w-16 h-16 text-brand-charcoal" />
    </div>
  );

  return (
    <AboutSection
      title="Our Story"
      heading="A Legacy of Faith & Service"
      imageElement={imageElement}
    >
      <p className="mb-4">
        Community House of Prayer was founded with a simple yet powerful vision: to be a beacon
        of hope in Fort Worth's City View community and beyond. What began as a small gathering
        of believers has grown into a vibrant ministry dedicated to transforming lives through
        faith, love, and action.
      </p>
      <p className="mb-4">
        Our church stands on the belief that everyone deserves to experience God's love and
        grace, regardless of their background or circumstances. We have been called to serve
        the overlooked and underserved—the homeless, youth and families, and seniors in our
        community.
      </p>
      <p>
        Today, we continue to grow and expand our reach, always guided by the 7 Pillars of
        our faith and our commitment to meeting people exactly where they are—physically,
        spiritually, and emotionally.
      </p>
    </AboutSection>
  );
}

export default ChurchHistory;

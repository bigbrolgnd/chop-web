import Hero from '@/components/features/Hero';
import ServiceTimes from '@/components/features/ServiceTimes';
import WhoWeAre from '@/components/features/WhoWeAre';
import FacebookFeed from '@/components/features/FacebookFeed';
import QuickContact from '@/components/features/QuickContact';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Service Times */}
      <ServiceTimes />

      {/* Who We Are / Mission */}
      <WhoWeAre />

      {/* Facebook Feed */}
      <FacebookFeed />

      {/* Quick Contact */}
      <QuickContact />
    </div>
  );
}

export default HomePage;

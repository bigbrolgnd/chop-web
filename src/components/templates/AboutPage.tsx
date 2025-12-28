import ChurchHistory from '@/components/features/ChurchHistory';
import PastorBio from '@/components/features/PastorBio';
import MissionVision from '@/components/features/MissionVision';
import Beliefs from '@/components/features/Beliefs';

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-brand-charcoal py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-brand-silver max-w-2xl mx-auto">
            Learn about our mission, our pastor, and the values that guide everything we do.
          </p>
        </div>
      </section>

      {/* Church History Section */}
      <div className="bg-white">
        <ChurchHistory />
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-brand-silver/50" />
      </div>

      {/* Pastor Bio Section */}
      <div className="bg-white">
        <PastorBio />
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-brand-silver/50" />
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white">
        <MissionVision />
      </div>

      {/* Beliefs Section (has its own background) */}
      <Beliefs />
    </div>
  );
}

export default AboutPage;

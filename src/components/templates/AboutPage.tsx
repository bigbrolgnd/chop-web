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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h1>
          <div className="text-lg md:text-xl text-brand-silver max-w-4xl mx-auto space-y-6 leading-relaxed">
            <p>
              Community House of Prayer is a Christ-centered ministry dedicated to reaching the lost, restoring the broken, and strengthening the body of Christ through the power of prayer, worship, and compassionate outreach.
            </p>
            <p>
              We are a church that cares for the whole individual — mind, body, and soul — ministering to people where they are and helping them become who God has called them to be.
            </p>
            <p>
              Our ministry serves the homeless, youth, seniors, and families, bringing the love of Jesus to every corner of our community and beyond.
            </p>
          </div>
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
      <div id="pastor" className="bg-white">
        <PastorBio />
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-brand-silver/50" />
      </div>

      {/* Mission & Vision Section */}
      <div id="mission" className="bg-white">
        <MissionVision />
      </div>

      {/* Beliefs Section (has its own background) */}
      <div id="beliefs">
        <Beliefs />
      </div>
    </div>
  );
}

export default AboutPage;

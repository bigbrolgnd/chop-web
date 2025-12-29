import AboutPage from '@/components/templates/AboutPage';
import QuickContact from '@/components/features/QuickContact';
import HeroSlideshow from '@/components/ui/HeroSlideshow';

function Home() {
  const heroImages = [
    '/slideshow/slide-1.jpg',
    '/slideshow/slide-2.jpg',
    '/slideshow/slide-3.jpg',
    '/slideshow/slide-4.jpg',
    '/slideshow/slide-5.jpg',
  ];

  return (
    <div className="min-h-screen">
      {/* Home / Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center bg-brand-charcoal text-white overflow-hidden">
        <HeroSlideshow images={heroImages} />

        {/* Content - Relative & Z-Index to sit on top */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg leading-tight">
            "Commissioned by God to reach the lost and heal the hurting."
          </h1>
        </div>
      </section>

      {/* About Section */}
      <div id="about">
        <AboutPage />
      </div>

      {/* Contact Section */}
      <QuickContact />
    </div>
  );
}

export default Home;

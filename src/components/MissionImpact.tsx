import { useState } from 'react';
import { Users, Home, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

const slides: Slide[] = [
  {
    type: 'image',
    // Placeholder for the team photo provided in the attachment.
    // In a real scenario, this would be the local asset path (e.g., /assets/team-photo.jpg)
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000', 
    alt: 'Ministry Team at City View Apartments'
  },
  {
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000'
  }
];

function MissionImpact() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="mission" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Who We Are
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-gold"></span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Community House of Prayer is more than a building; we are a movement commissioned by God to bring hope to the hopeless and restoration to the broken. We believe in meeting people exactly where they are—physically, spiritually, and emotionally.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              We are dedicated to serving the overlooked and underserved in our community, specifically:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Home className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">The Homeless</h3>
                  <p className="text-gray-500">Providing dignity, resources, and spiritual support.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Users className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Youth & Families</h3>
                  <p className="text-gray-500">Mentoring the next generation and strengthening family units.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <HeartHandshake className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Seniors</h3>
                  <p className="text-gray-500">Ensuring our elders are honored, cared for, and connected.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Slideshow */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            {/* Height constraint applied here (h-64 md:h-96) to fix "way too big" issue */}
            <div className="relative h-64 md:h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
              
              {/* Media Content */}
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {slide.type === 'video' ? (
                    <div className="w-full h-full relative bg-black">
                      <video
                        src={slide.src}
                        poster={slide.poster}
                        controls
                        className="w-full h-full object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <img 
                      src={slide.src} 
                      alt={slide.alt} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Overlay Gradient (Only on images for text readability if we added text) */}
                  {slide.type === 'image' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  )}
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-brand-gold w-6' : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-8 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-2xl rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionImpact;
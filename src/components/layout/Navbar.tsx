import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger logo animation after component mounts
    const timer = setTimeout(() => setLogoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white z-50">
      {/* Desktop Header - Centered Branding with Logo Below */}
      <div className="hidden lg:block py-8 border-b border-brand-silver/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Church Name */}
            <Link to="/" className="group">
              <h1 className="text-3xl xl:text-4xl font-bold text-brand-charcoal tracking-tight mb-2 group-hover:text-brand-charcoal-dark transition-colors">
                Community House of Prayer
              </h1>
              <p className="text-base xl:text-lg font-medium text-brand-steel tracking-wide">
                Commissioned by God to reach the lost and heal the hurting.
              </p>
            </Link>

            {/* Animated Logo - Below Text on Desktop */}
            <div className={`mt-6 transition-all duration-700 ease-out ${
              logoLoaded
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-4 scale-95'
            }`}>
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="Community House of Prayer"
                  className="h-32 xl:h-40 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Header - Logo on Left */}
      <div className="lg:hidden py-4 border-b border-brand-silver/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo on Left - Animated */}
            <Link to="/" className="flex items-center gap-3">
              <div className={`transition-all duration-500 ease-out ${
                logoLoaded
                  ? 'opacity-100 transform scale-100'
                  : 'opacity-0 transform scale-90'
              }`}>
                <img
                  src="/logo.svg"
                  alt="Community House of Prayer"
                  className="h-14 sm:h-16 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-brand-charcoal leading-tight">
                  Community House<br />of Prayer
                </h1>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-charcoal hover:text-brand-gold hover:bg-brand-silver/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Sticky */}
      <nav className="hidden lg:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-silver/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-14 gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative font-medium transition-colors duration-200 text-sm tracking-wide ${
                  isActive(link.to)
                    ? 'text-brand-charcoal'
                    : 'text-brand-steel hover:text-brand-charcoal'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/#partner"
              className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-brand-gold hover:bg-amber-600 transition-all shadow-sm hover:shadow-md"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Partner With Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-b border-brand-silver/30 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-brand-charcoal bg-brand-silver/30'
                    : 'text-brand-steel hover:text-brand-charcoal hover:bg-brand-silver/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#partner"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full mt-4 px-5 py-3 rounded-xl font-semibold text-white bg-brand-gold hover:bg-amber-600 transition-colors shadow-md"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

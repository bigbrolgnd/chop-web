import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

function Navbar() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isTicker, setIsTicker] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Trigger logo animation after component mounts
    const timer = setTimeout(() => setLogoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Check for overflow
  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current && contentRef.current) {
        // We use a broader threshold or strict comparison
        const containerWidth = navRef.current.clientWidth;
        const contentWidth = contentRef.current.scrollWidth;
        // If content is wider than container, or close to it on small screens to force effect if desired
        setIsTicker(contentWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/#home' },
    { label: 'Who We Are', to: '/#about' },
    { label: 'Our Pastor', to: '/#pastor' },
    { label: 'Mission', to: '/#mission' },
    { label: 'Beliefs', to: '/#beliefs' },
    { label: 'Contact', to: '/#contact' },
  ];

  const isActive = (path: string) => {
    // Handle hash links
    if (path.includes('#')) {
      const hash = path.substring(path.indexOf('#'));
      // If active hash matches
      if (location.hash === hash) return true;
      // If we are at root ('/') with no hash, highlight Home ('/#home')
      if (path === '/#home' && location.hash === '') return true;
      return false;
    }
    return location.pathname === path;
  };

  const NavItem = ({ link }: { link: typeof navLinks[0] }) => (
    <Link
      to={link.to}
      className={`relative font-bold transition-colors duration-200 text-xl md:text-2xl tracking-wide whitespace-nowrap px-4 ${isActive(link.to)
        ? 'text-brand-charcoal'
        : 'text-brand-steel hover:text-brand-charcoal'
        }`}
    >
      {link.label}
      {isActive(link.to) && (
        <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-brand-gold rounded-full" />
      )}
    </Link>
  );

  return (
    <header className="w-full bg-white z-50">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* Main Header Area - Logo */}
      <div className="py-6 md:py-8 border-b border-brand-silver/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className={`w-full max-w-[280px] md:max-w-2xl transition-all duration-700 ease-out ${logoLoaded
              ? 'opacity-100 transform translate-y-0 scale-100'
              : 'opacity-0 transform translate-y-4 scale-95'
              }`}>
              <Logo
                linkClassName="block w-full"
                className="w-full h-auto hover:scale-105 transition-transform duration-300 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Sticky */}
      <nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-silver/30 shadow-sm overflow-hidden"
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto">
          {isTicker ? (
            /* Ticker View (Overflowing) */
            <div className="flex items-center h-14 overflow-hidden">
              <div className="flex animate-marquee">
                {/* Loop 1 */}
                <div className="flex items-center gap-8 pr-8">
                  {navLinks.map((link) => <NavItem key={`${link.label}-1`} link={link} />)}
                </div>
                {/* Loop 2 (Duplicate) */}
                <div className="flex items-center gap-8 pr-8">
                  {navLinks.map((link) => <NavItem key={`${link.label}-2`} link={link} />)}
                </div>
                {/* Loop 3 (Extra buffer) */}
                <div className="flex items-center gap-8 pr-8">
                  {navLinks.map((link) => <NavItem key={`${link.label}-3`} link={link} />)}
                </div>
                <div className="flex items-center gap-8 pr-8">
                  {navLinks.map((link) => <NavItem key={`${link.label}-4`} link={link} />)}
                </div>
              </div>
            </div>
          ) : (
            /* Standard View (Centered) */
            <div
              ref={contentRef}
              className="flex justify-center items-center py-4 md:h-14 gap-6 md:gap-12 min-w-max mx-auto px-4"
            >
              {navLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

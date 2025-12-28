import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Logo from '@/components/ui/Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Header Section - Centered Branding */}
      <div className="bg-brand-blue py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="text-center">
              <Link to="/" className="inline-block">
                <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  Community House of Prayer
                </h1>
                <p className="text-sm md:text-base font-medium text-brand-gold tracking-widest">
                  Commissioned by God to Serve Our City
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            {/* Mobile: Logo on left */}
            <div className="flex items-center md:hidden">
              <Logo className="text-sm" />
            </div>

            {/* Desktop Nav - Centered */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 uppercase tracking-wide text-sm ${
                    isActive(link.to)
                      ? 'text-brand-blue border-b-2 border-brand-gold pb-1'
                      : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#partner"
                className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-brand-blue hover:bg-blue-900 transition-all"
              >
                <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                Partner With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-brand-blue hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.to)
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-gray-700 hover:text-brand-blue hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#partner"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full mt-4 px-5 py-3 rounded-md font-bold text-white bg-brand-blue"
              >
                <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

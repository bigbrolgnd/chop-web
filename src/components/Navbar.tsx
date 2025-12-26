import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Mission', href: '#mission' },
    { label: 'Core Values', href: '#values' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-brand-blue uppercase tracking-tight">
                Community House
              </span>
              <span className="text-sm md:text-base font-semibold text-brand-gold tracking-widest -mt-1">
                OF PRAYER
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-brand-blue font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-brand-blue hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Partner With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-brand-blue hover:bg-gray-100 focus:outline-none"
              aria-label="Main menu"
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold text-white bg-brand-blue"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
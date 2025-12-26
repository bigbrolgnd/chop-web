import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              Community House<br />
              <span className="text-brand-gold text-lg">Of Prayer</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Commissioned by God to restore the mind, body, and soul of our city through faith and action.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-gold mr-3 mt-1" />
                <span className="text-gray-400 text-sm">
                  Fort Worth, TX<br />
                  Serving City View & Beyond
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-gold mr-3" />
                <span className="text-gray-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-gold mr-3" />
                <a href="mailto:info@communityhouseofprayer.org" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@communityhouseofprayer.org
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links / Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <p className="text-gray-400 text-sm">Join our newsletter to receive updates on outreach events.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button className="bg-brand-gold text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Community House of Prayer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
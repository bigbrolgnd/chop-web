import { MapPin, Phone, Mail, Heart, Facebook } from 'lucide-react';

function QuickContact() {
  return (
    <section id="contact" className="py-16 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase font-semibold tracking-widest text-brand-gold mb-3">
            Get In Touch
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-silver mx-auto">
            We'd love to hear from you. Reach out with questions or to learn how you can get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-brand-silver">
              Fort Worth, TX<br />
              Serving City View & Beyond
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Facebook className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-lg font-bold mb-2">Social</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100092857989783"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-silver hover:text-white transition-colors"
            >
              Facebook Page
            </a>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a
              href="mailto:info@communityhouseofprayer.org"
              className="text-brand-silver hover:text-white transition-colors"
            >
              info@communityhouseofprayer.org
            </a>
          </div>
        </div>

        <div className="text-center" id="partner">
          <a
            href="https://www.facebook.com/profile.php?id=100092857989783"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-white font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            Partner With Us
          </a>
          <p className="mt-4 text-sm text-brand-steel">
            Join us in making a difference in our community
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuickContact;

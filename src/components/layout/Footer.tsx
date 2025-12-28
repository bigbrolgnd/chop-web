function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-brand-steel">
            &copy; {currentYear} Community House of Prayer. All rights reserved.
          </p>
          <p className="text-xs text-brand-steel/60 mt-2">
            Commissioned by God to reach the lost and heal the hurting.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

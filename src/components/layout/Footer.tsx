function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Community House of Prayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

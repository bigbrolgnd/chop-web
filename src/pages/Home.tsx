function Home() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Welcome to Community House of Prayer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Commissioned by God to restore the mind, body, and soul of our city through faith and action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="btn-primary"
            >
              Our Services
            </a>
            <a
              href="/about"
              className="btn-secondary bg-brand-blue/10 text-brand-blue border-brand-blue/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

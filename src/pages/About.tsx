function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission, our pastor, and our core beliefs.
          </p>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Community House of Prayer is commissioned by God to restore the mind, body, and soul
              of Fort Worth through faith, compassion, and community service. We serve the homeless,
              youth and families, and seniors in the City View area and beyond.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Pastor</h2>
            <p className="text-gray-600">
              Pastor Loretta Stevens leads Community House of Prayer with a heart for service
              and a vision for community transformation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Beliefs</h2>
            <p className="text-gray-600">
              We are built on seven pillars: Biblical Truth, Spirit-Led Prayer, Compassionate Service,
              Authentic Community, Integrity, Hope, and Unconditional Love.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

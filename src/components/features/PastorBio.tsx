import AboutSection from '@/components/ui/AboutSection';

function PastorBio() {
  const imageElement = (
    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-gold shadow-lg">
      <img
        src="/images/pastor-stevens.jpg"
        alt="Pastor Loretta Stevens"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <AboutSection
      title="Our Pastor"
      heading="Pastor Loretta Stevens"
      imageElement={imageElement}
    >
      <p className="mb-4">
        Pastor Loretta Stevens leads Community House of Prayer with a heart full of compassion
        and a vision for community transformation. Her calling to ministry is rooted in a deep
        love for God's people and an unwavering commitment to serving those in need.
      </p>
      <p className="mb-4">
        Under her leadership, the church has expanded its outreach programs, touching countless
        lives in the Fort Worth area. Pastor Stevens believes that the church should be a place
        of refuge, healing, and restoration for all who enter its doors.
      </p>
      <p>
        "We are commissioned by God to restore the mind, body, and soul of our city," says
        Pastor Stevens. "Every person who walks through our doors is family, and we are
        committed to walking alongside them on their journey."
      </p>
    </AboutSection>
  );
}

export default PastorBio;

import { ReactNode } from 'react';

interface AboutSectionProps {
  title: string;
  heading: string;
  children: ReactNode;
  imageElement?: ReactNode;
  className?: string;
}

function AboutSection({ title, heading, children, imageElement, className = '' }: AboutSectionProps) {
  return (
    <section className={`flex flex-col gap-4 mx-auto w-full max-w-none py-12 ${className}`}>
      {imageElement && (
        <div className="px-6 mt-4">
          <div className="w-full max-w-lg mx-auto">{imageElement}</div>
        </div>
      )}
      <header className="px-6">
        <h3 className="section-subheading text-center">
          {title}
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
          {heading}
        </h2>
      </header>
      <div className="px-6 mt-4">
        <div className="prose prose-lg max-w-3xl mx-auto text-left text-brand-steel">
          {children}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

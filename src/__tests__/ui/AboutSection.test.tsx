import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from '@/components/ui/AboutSection';

describe('AboutSection', () => {
  it('renders title and heading', () => {
    render(
      <AboutSection title="Test Title" heading="Test Heading">
        <p>Test content</p>
      </AboutSection>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <AboutSection title="Title" heading="Heading">
        <p>Child content here</p>
      </AboutSection>
    );

    expect(screen.getByText('Child content here')).toBeInTheDocument();
  });

  it('renders image element when provided', () => {
    render(
      <AboutSection
        title="Title"
        heading="Heading"
        imageElement={<img src="/test.jpg" alt="Test image" />}
      >
        <p>Content</p>
      </AboutSection>
    );

    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AboutSection title="Title" heading="Heading" className="custom-class">
        <p>Content</p>
      </AboutSection>
    );

    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});

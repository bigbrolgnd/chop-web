import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '@/components/templates/AboutPage';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AboutPage', () => {
  it('renders the page title', () => {
    renderWithRouter(<AboutPage />);

    expect(screen.getByRole('heading', { level: 1, name: /about us/i })).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    renderWithRouter(<AboutPage />);

    // Church History
    expect(screen.getByText(/a legacy of faith/i)).toBeInTheDocument();

    // Pastor Bio - appears in heading and content
    expect(screen.getAllByText(/pastor loretta stevens/i).length).toBeGreaterThan(0);

    // Mission & Vision
    expect(screen.getByText(/mission & vision/i)).toBeInTheDocument();

    // Beliefs - 7 Pillars (text appears in multiple places)
    expect(screen.getAllByText(/7 pillars/i).length).toBeGreaterThan(0);
  });

  it('renders all 7 pillars', () => {
    renderWithRouter(<AboutPage />);

    expect(screen.getByText('Biblical Truth')).toBeInTheDocument();
    expect(screen.getByText('Spirit-Led Prayer')).toBeInTheDocument();
    expect(screen.getByText('Compassionate Service')).toBeInTheDocument();
    expect(screen.getByText('Authentic Community')).toBeInTheDocument();
    expect(screen.getByText('Integrity')).toBeInTheDocument();
    expect(screen.getByText('Hope')).toBeInTheDocument();
    expect(screen.getByText('Unconditional Love')).toBeInTheDocument();
  });

  it('renders the "Who We Serve" list', () => {
    renderWithRouter(<AboutPage />);

    expect(screen.getByText('The Homeless')).toBeInTheDocument();
    expect(screen.getByText('Youth & Families')).toBeInTheDocument();
    expect(screen.getByText('Seniors')).toBeInTheDocument();
  });

  it('renders the Get Involved CTA', () => {
    renderWithRouter(<AboutPage />);

    expect(screen.getByRole('link', { name: /get involved/i })).toBeInTheDocument();
  });
});

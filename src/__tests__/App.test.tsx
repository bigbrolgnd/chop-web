import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the main layout structure', () => {
    render(<App />);

    // Check for header (banner role)
    // There might be multiple headers due to sub-sections having headers
    expect(screen.getAllByRole('banner').length).toBeGreaterThan(0);

    // Check for main content area
    expect(screen.getByRole('main')).toBeInTheDocument();

    // Footer is currently commented out in LayoutShell
    // expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the home page by default', () => {
    render(<App />);

    // Check for hero content on home page
    expect(screen.getAllByText(/Commissioned by God/i).length).toBeGreaterThan(0);
    
    // Service Times is not on the main Home page anymore (it's in HomePage template but not used in pages/Home.tsx)
    // expect(screen.getByText('Service Times')).toBeInTheDocument();
  });

  it('renders the navigation with correct links', () => {
    render(<App />);

    // Check for navigation links
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);

    // "About" is now "Who We Are"
    const whoWeAreLinks = screen.getAllByText('Who We Are');
    expect(whoWeAreLinks.length).toBeGreaterThan(0);

    // Partner With Us is in QuickContact section
    const partnerLinks = screen.getAllByText(/Partner With Us/i);
    expect(partnerLinks.length).toBeGreaterThan(0);
  });

  it('renders the church branding', () => {
    render(<App />);

    // Check for church name (it's in the logo alt text/aria-label)
    expect(screen.getAllByLabelText('Community House of Prayer').length).toBeGreaterThan(0);

    // Tagline on Home page
    expect(screen.getByText(/reach the lost and heal the hurting/i)).toBeInTheDocument();
  });
});
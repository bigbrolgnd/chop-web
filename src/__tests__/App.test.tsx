import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the main layout structure', () => {
    render(<App />);

    // Check for header (banner role from the new header element)
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Check for main content area
    expect(screen.getByRole('main')).toBeInTheDocument();

    // Check for footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the home page by default', () => {
    render(<App />);

    // Check for the welcome heading on home page
    expect(screen.getByText(/Welcome to Community House of Prayer/i)).toBeInTheDocument();
  });

  it('renders the navigation with correct links', () => {
    render(<App />);

    // Check for navigation links
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);

    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(0);

    const partnerLinks = screen.getAllByText(/Partner With Us/i);
    expect(partnerLinks.length).toBeGreaterThan(0);
  });

  it('renders the church branding', () => {
    render(<App />);

    // Check for church name in header
    expect(screen.getByText('Community House of Prayer')).toBeInTheDocument();

    // Check for tagline
    expect(screen.getByText('Commissioned by God to Serve Our City')).toBeInTheDocument();
  });
});

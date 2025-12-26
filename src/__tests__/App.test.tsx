import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the main layout', () => {
    render(<App />);

    // Check that the main navigation is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Check that the main content area is present
    expect(screen.getByRole('main')).toBeInTheDocument();

    // Check for footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the hero section with call to action', () => {
    render(<App />);

    // Check for the main heading - use getAllBy since text appears multiple times
    const commissionedTexts = screen.getAllByText(/Commissioned by God/i);
    expect(commissionedTexts.length).toBeGreaterThan(0);

    // Check for call-to-action buttons - use getAllBy since there may be multiple
    const missionLinks = screen.getAllByRole('link', { name: /Our Mission/i });
    expect(missionLinks.length).toBeGreaterThan(0);

    const impactLinks = screen.getAllByRole('link', { name: /See Our Impact/i });
    expect(impactLinks.length).toBeGreaterThan(0);
  });

  it('renders the navigation with correct links', () => {
    render(<App />);

    // Check for navigation links - may appear in multiple places
    const partnerLinks = screen.getAllByRole('link', { name: /Partner With Us/i });
    expect(partnerLinks.length).toBeGreaterThan(0);
  });
});

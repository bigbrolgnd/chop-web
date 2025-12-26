import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);

    expect(screen.getByText('Community House')).toBeInTheDocument();
    expect(screen.getByText('OF PRAYER')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);

    // Use getAllBy for cases where there may be multiple matches
    const missionLinks = screen.getAllByRole('link', { name: /Our Mission/i });
    expect(missionLinks.length).toBeGreaterThan(0);

    const valuesLinks = screen.getAllByRole('link', { name: /Core Values/i });
    expect(valuesLinks.length).toBeGreaterThan(0);

    // "Community" appears in both brand name link and nav link, so use getAllBy
    const communityLinks = screen.getAllByRole('link', { name: /Community/i });
    expect(communityLinks.length).toBeGreaterThan(0);

    const contactLinks = screen.getAllByRole('link', { name: /Contact/i });
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('has a working mobile menu toggle', () => {
    render(<Navbar />);

    // Find the mobile menu button
    const menuButton = screen.getByRole('button', { name: /main menu/i });
    expect(menuButton).toBeInTheDocument();

    // Click to open
    fireEvent.click(menuButton);

    // After clicking, there should be more links visible (mobile + desktop)
    const allMissionLinks = screen.getAllByRole('link', { name: /Our Mission/i });
    expect(allMissionLinks.length).toBeGreaterThanOrEqual(2); // Desktop + mobile
  });
});

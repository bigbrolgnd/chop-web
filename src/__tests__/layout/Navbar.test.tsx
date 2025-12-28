import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar', () => {
  it('renders the church name in header', () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText('Community House of Prayer')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText('Commissioned by God to Serve Our City')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);

    // Desktop nav links
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders Partner With Us button', () => {
    renderWithRouter(<Navbar />);

    const partnerLinks = screen.getAllByText(/Partner With Us/i);
    expect(partnerLinks.length).toBeGreaterThan(0);
  });

  it('has mobile menu toggle button', () => {
    renderWithRouter(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when button clicked', () => {
    renderWithRouter(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle menu/i });

    // Initially mobile menu items should be in DOM (but may be hidden by CSS)
    // Click to open
    fireEvent.click(menuButton);

    // After clicking, the menu should be open (aria-expanded should be true)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });
});

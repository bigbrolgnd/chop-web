import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '@/components/templates/HomePage';

const renderWithRouter = (component: ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  it('renders the hero section', () => {
    renderWithRouter(<HomePage />);

    // Check for updated hero text
    expect(screen.getAllByText(/Reaching the Lost/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Healing the Hurting/i).length).toBeGreaterThan(0);
  });

  it('renders service times section', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText('Service Times')).toBeInTheDocument();
    expect(screen.getByText('Sunday Worship')).toBeInTheDocument();
    expect(screen.getByText('Bible Study')).toBeInTheDocument();
    expect(screen.getByText('Community Outreach')).toBeInTheDocument();
  });

  it('renders who we are section', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText('Who We Are')).toBeInTheDocument();
    // These specific texts might be in WhoWeAre component details
    expect(screen.getByText('The Homeless')).toBeInTheDocument();
    expect(screen.getByText('Youth & Families')).toBeInTheDocument();
    expect(screen.getByText('Seniors')).toBeInTheDocument();
  });

  it('renders facebook feed section', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText('Latest Updates')).toBeInTheDocument();
    expect(screen.getByTitle('Community House of Prayer Facebook Feed')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Follow Us on Facebook/i })).toBeInTheDocument();
  });

  it('renders quick contact section', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    // Phone removed from QuickContact
    // expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Social')).toBeInTheDocument();
  });

  it('renders partner with us CTA', () => {
    renderWithRouter(<HomePage />);

    const partnerLinks = screen.getAllByText(/Partner With Us/i);
    expect(partnerLinks.length).toBeGreaterThan(0);
  });

  it('renders hero CTAs with correct links', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole('link', { name: /Our Mission/i })).toHaveAttribute('href', '#mission');
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '/about');
  });
});
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

const renderWithRouter = (component: ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar', () => {
  it('renders the logo', () => {
    renderWithRouter(<Navbar />);

    // Logo link has aria-label
    expect(screen.getByLabelText('Community House of Prayer')).toBeInTheDocument();
  });

  it('renders scroll down indicator', () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText('Scroll Down')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);

    // Check for main links
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Who We Are').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Our Pastor').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Mission').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Beliefs').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });
});
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);

    expect(screen.getByText(/Community House of Prayer/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('displays current year dynamically', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('has contentinfo role (footer)', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

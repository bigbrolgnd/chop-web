import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import LayoutShell from '@/components/layout/LayoutShell';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('LayoutShell', () => {
  it('renders children content', () => {
    renderWithRouter(
      <LayoutShell>
        <div data-testid="test-child">Test Content</div>
      </LayoutShell>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders navbar', () => {
    renderWithRouter(
      <LayoutShell>
        <div>Content</div>
      </LayoutShell>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders footer', () => {
    renderWithRouter(
      <LayoutShell>
        <div>Content</div>
      </LayoutShell>
    );

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders main content area', () => {
    renderWithRouter(
      <LayoutShell>
        <div>Content</div>
      </LayoutShell>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

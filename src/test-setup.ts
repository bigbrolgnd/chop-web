import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock fetch for SVG loading
global.fetch = vi.fn().mockImplementation((url) => {
  if (typeof url === 'string' && url.includes('logo-animated.svg')) {
    return Promise.resolve({
      text: () => Promise.resolve('<svg>mock-logo</svg>'),
      ok: true,
    } as Response);
  }
  return Promise.resolve({
    text: () => Promise.resolve(''),
    json: () => Promise.resolve({}),
    ok: true,
  } as Response);
});
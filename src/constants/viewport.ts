import type { Viewport } from 'next';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'overlays-content',
  themeColor: '#f8fafc',
  colorScheme: 'only light',
} as const satisfies Viewport;

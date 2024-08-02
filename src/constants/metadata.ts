import type { Metadata } from 'next';

export const metadata = {
  metadataBase: (
    process.env.NODE_ENV === 'production'
      ? new URL('https://taiy.me')
      : new URL('http://localhost:8080')
  ),
  title: {
    template: '%s - taiy.me',
    default: 'taiy.me',
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  icons: [{
    url: 'https://assets.taiy.me/taiy.me/favicons/favicon.ico',
    type: 'image/x-icon',
    sizes: '32x32',
    rel: 'icon',
  }, {
    url: 'https://assets.taiy.me/taiy.me/favicons/icon-192.png',
    type: 'image/png',
    sizes: '192x192',
    rel: 'icon',
  }, {
    url: 'https://assets.taiy.me/taiy.me/favicons/icon-512.png',
    type: 'image/png',
    sizes: '512x512',
    rel: 'icon',
  }, {
    url: 'https://assets.taiy.me/taiy.me/favicons/apple-touch-icon.png',
    type: 'image/png',
    sizes: '180x180',
    rel: 'apple-touch-icon',
  }],
} as const satisfies Metadata;

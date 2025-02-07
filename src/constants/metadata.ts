import type { Metadata } from 'next';

import ImagesFaviconsAppleTouchIcon from '@/images/favicons/apple-touch-icon.png';
import ImagesFaviconsFavicon from '@/images/favicons/favicon.ico';
import ImagesFaviconsIcon192 from '@/images/favicons/icon-192.png';
import ImagesFaviconsIcon512 from '@/images/favicons/icon-512.png';

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
    url: ImagesFaviconsFavicon.src,
    type: 'image/x-icon',
    sizes: '32x32',
    rel: 'icon',
  }, {
    url: ImagesFaviconsIcon192.src,
    type: 'image/png',
    sizes: '192x192',
    rel: 'icon',
  }, {
    url: ImagesFaviconsIcon512.src,
    type: 'image/png',
    sizes: '512x512',
    rel: 'icon',
  }, {
    url: ImagesFaviconsAppleTouchIcon.src,
    type: 'image/png',
    sizes: '180x180',
    rel: 'apple-touch-icon',
  }],
} as const satisfies Metadata;

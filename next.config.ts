import type { NextConfig } from 'next';

export default {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/specials',
        destination: '/',
        permanent: false,
      },
      {
        source: '/gyagu',
        destination: '/',
        permanent: false,
      },
    ];
  },
} as const satisfies NextConfig;

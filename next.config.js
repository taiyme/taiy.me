// @ts-check

/** @type {import('next').NextConfig} */
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
};

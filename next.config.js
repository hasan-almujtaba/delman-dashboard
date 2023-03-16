/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'apis',
      'components',
      'hooks',
      'layouts',
      'pages',
      'features',
      'store',
      'types',
    ],
  },
}

module.exports = nextConfig

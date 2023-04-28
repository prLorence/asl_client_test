/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        // https://ik.imagekit.io/335jblpnu5/profile.png
        port: '',
        pathname: '/335jblpnu5/**',
      },
    ],
  },
}

module.exports = nextConfig

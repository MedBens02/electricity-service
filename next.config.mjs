/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker deployment
  typescript: {
    ignoreBuildErrors: false,
  },
  transpilePackages: ['@clerk/nextjs'],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;

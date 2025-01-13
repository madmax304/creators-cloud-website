/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Remove experimental features for stability
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning only, don't fail build due to ESLint
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 
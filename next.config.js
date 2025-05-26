/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure the output is standalone for better deployment
  output: 'standalone',
  // Enable static optimization where possible
  poweredByHeader: false,
  // Explicitly disable app directory to force pages directory usage
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig 
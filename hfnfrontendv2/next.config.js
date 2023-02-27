/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
        domains: ["lh3.googleusercontent.com", 'cdn.sanity.io'],
        formats: ["image/webp"],
    },
    
}

module.exports = nextConfig

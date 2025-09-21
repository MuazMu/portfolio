/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  // Simple configuration for stable deployment
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'portfolio-muazmus-projects.vercel.app']
    }
  }
}

export default nextConfig

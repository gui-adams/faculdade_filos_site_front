/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // Otimizações de performance para o servidor
  compress: true, 
  powersByHeader: false,
  generateEtags: true,
};

export default nextConfig;
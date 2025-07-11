/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  // Configuração para tratar o react-pdf corretamente
  transpilePackages: ['@react-pdf', '@react-pdf/renderer'],
  webpack: (config) => {
    // Configuração para módulos ES modules como o react-pdf
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Força o Next.js a resolver estes pacotes usando ESM
      '@react-pdf/renderer': '@react-pdf/renderer/lib/react-pdf.js',
    };
    return config;
  },
};

export default nextConfig;

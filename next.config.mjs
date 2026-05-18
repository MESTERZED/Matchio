/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Matchio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
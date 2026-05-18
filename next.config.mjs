/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Matchio',       // Important : doit correspondre au nom de ton repo
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
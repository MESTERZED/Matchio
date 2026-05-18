/** @type {import('next').NextConfig} */
const nextConfig = {
  // Important for GitHub Pages
  output: 'export',           // This creates the 'out' folder
  basePath: '/Matchio',       // Must match your repository name
  images: {
    unoptimized: true,        // Required when using static export
  },
  trailingSlash: true,        // Recommended for GitHub Pages
};

export default nextConfig;
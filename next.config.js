/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "miro.medium.com",
      "scontent.fdac90-1.fna.fbcdn.net",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;

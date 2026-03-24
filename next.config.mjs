/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      }
      ,
      {
        protocol: "https",
        hostname: "htmldemo.net",
      }
      ,
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      }
      ,
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      }
    ]
  },
};

export default nextConfig;

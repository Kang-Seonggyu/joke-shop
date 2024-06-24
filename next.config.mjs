/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true, // SVG 이미지 import 문제
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        // pathname: '/',
      },
    ],
  },
};

export default nextConfig;

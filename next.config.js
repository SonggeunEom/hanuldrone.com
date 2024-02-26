/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.siminilbo.co.kr',
        port: '',
        pathname: '/news/data/20230907/p1160267458084537_830_thum.png',
      },
      {
        protocol: 'https',
        hostname: 'www.naver.com',
        port: '',
        pathname: '/firehouse79/223326506356',
      },
    ],
  },
};

module.exports = nextConfig;

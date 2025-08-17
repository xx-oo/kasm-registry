/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'cnm Technologies',
    description: '搬运原版镜像回国加速',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.cnm.cool/',
    contactUrl: 'https://cnm.cool/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

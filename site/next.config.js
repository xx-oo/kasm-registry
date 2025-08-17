/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'cnm Technologies',
    description: '克隆官方原版镜像加速访问',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.cnm.cool/',
    contactUrl: 'https://cnm.cool/support',
  },
  reactStrictMode: true,
  basePath: '/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

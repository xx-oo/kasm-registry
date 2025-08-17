/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'cnm Technologies',
    description: 'The official store for cnm supported workspaces.',
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

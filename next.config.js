const withPWAInit = require('next-pwa')

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: 'public',
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ['app-build-manifest.json']
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  experimental: {
    swcPlugins: [['swc-plugin-coverage-instrument', {}]]
  }
}

module.exports = withPWA(nextConfig)

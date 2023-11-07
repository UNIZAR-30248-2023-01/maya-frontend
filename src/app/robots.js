export default function robots () {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${process.env.VERCEL_URL}/sitemap.xml`
  }
}

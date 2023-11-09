export default function sitemap () {
  return [
    {
      url: `${process.env.VERCEL_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${process.env.VERCEL_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.VERCEL_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]
}

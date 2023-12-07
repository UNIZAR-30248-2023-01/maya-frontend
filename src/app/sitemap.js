import { sites } from '@/lib/constants'

export default function sitemap () {
  return sites.sort((a, b) => Number(b.priority) - Number(a.priority))
}

import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Projects',
  description: 'Here is a list of your projects'
}

export default function ProjectsLayout ({ children }) {
  return <Layout>{children}</Layout>
}

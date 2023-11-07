import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Home',
  description: 'This is the home page'
}

export default function HomeLayout ({ children }) {
  return <Layout>{children}</Layout>
}

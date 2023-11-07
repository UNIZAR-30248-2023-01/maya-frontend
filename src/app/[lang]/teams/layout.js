import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Teams',
  description: 'Here is a list of your teams'
}

export default function TeamsLayout ({ children }) {
  return <Layout>{children}</Layout>
}

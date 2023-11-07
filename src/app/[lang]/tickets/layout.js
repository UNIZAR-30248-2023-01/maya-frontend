import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Tickets',
  description: 'Here is a list of your tickets'
}

export default function TicketsLayout ({ children }) {
  return <Layout>{children}</Layout>
}

import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Staff',
  description: 'Here is a list of your staff'
}

export default function StaffLayout ({ children }) {
  return <Layout>{children}</Layout>
}

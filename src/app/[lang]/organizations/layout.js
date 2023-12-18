import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Organizations',
  description: 'Here you can choose your organization.'
}

export default function OrganizationsLayout ({ children }) {
  return (
    <Layout onlyProviders={true}>
      {children}
    </Layout>
  )
}

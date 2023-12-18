import { Layout } from '@/components/layout'

export default function OrganizationLayout ({ params, children }) {
  return <Layout organization={params.organization}>{children}</Layout>
}

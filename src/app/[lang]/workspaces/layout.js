import { Layout } from '@/components/layout'

export const metadata = {
  title: 'Workspaces',
  description: 'Here is a list of your workspaces'
}

export default function WorkspacesLayout ({ children }) {
  return <Layout>{children}</Layout>
}

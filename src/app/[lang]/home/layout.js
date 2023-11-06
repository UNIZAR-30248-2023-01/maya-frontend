import { Layout } from "@/components/layout"

export const metadata = {
  title: 'home',
  description: 'You are in the home page'
}

export default function home ({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

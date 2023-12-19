import { Footer } from '@/components/footer'
import { RootNavbar } from '@/components/navbar'

export const metadata = {
  title: 'Sitemap',
  description: 'Here you can find all the public pages of the website.'
}

export default function SignUpLayout ({ children }) {
  return (
    <div>
      <RootNavbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

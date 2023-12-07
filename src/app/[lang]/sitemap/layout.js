import { Footer } from '@/components/footer'
import { RootNavbar } from '@/components/navbar'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Here you can read our privacy policy.'
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

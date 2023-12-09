import { Footer } from '@/components/footer'
import { RootNavbar } from '@/components/navbar'

export const metadata = {
  title: 'Terms of Service',
  description: 'Here you can read our terms of service.'
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

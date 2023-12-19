import { Footer } from '@/components/footer'
import { RootNavbar } from '@/components/navbar'

export const metadata = {
  title: 'FAQ',
  description: 'Here you can find solutions to the most common problems.'
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

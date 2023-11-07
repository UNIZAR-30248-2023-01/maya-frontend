export const metadata = {
  title: 'Privacy Policy',
  description: 'Here you can read our privacy policy.'
}

export default function SignUpLayout ({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <main>
        {children}
      </main>
    </div>
  )
}

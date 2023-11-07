export const metadata = {
  title: 'Sign In',
  description: 'Here you can sign in to your account.'
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

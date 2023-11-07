export const metadata = {
  title: 'Sign In',
  description: 'Here you can sign in to your account.'
}

export default function SignInLayout ({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <main>
        {children}
      </main>
    </div>
  )
}

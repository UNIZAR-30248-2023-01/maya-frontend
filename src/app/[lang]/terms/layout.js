export const metadata = {
  title: 'Terms of Service',
  description: 'Here you can read our terms of service.'
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

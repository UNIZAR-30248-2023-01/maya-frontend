'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { LuGithub } from 'react-icons/lu'
import { useLang } from '@/context/language-context'
import { useRouter } from 'next/navigation'

export function UserSignUp ({ className, ...props }) {
  const { dictionary } = useLang()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password, firstname, lastname, username} = e.target
    const newUser = {
      email: email.value,
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value
    }

    try {
      const logIn = async () => {
        setIsLoading(true)
        await fetch('http://localhost:3000/api/sign-up', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: { 'Content-Type': 'application/json' }
        }).catch(error => console.error(error))
      }

      toast.promise(logIn, {
        loading: dictionary.auth['signup-loading'],
        success: () => dictionary.auth['signup-success'],
        error: () => dictionary.auth['signup-error']
      })
    } catch (error) {
      toast.error(error?.message)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Username"
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="firstname">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder="First Name"
              type="firstname"
              autoCapitalize="none"
              autoComplete="firstname"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="lastname">
              Last Name
            </Label>
            <Input
              id="lastname"
              placeholder="Last Name"
              type="lastname"
              autoCapitalize="none"
              autoComplete="lastname"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
            password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            Register
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        <LuGithub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}

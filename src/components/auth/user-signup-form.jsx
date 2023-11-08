'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { LuGithub } from 'react-icons/lu'
import { useLang } from '@/context/language-context'

export function UserSignUp ({ className, ...props }) {
  const { dictionary } = useLang()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const { email, password } = event.target

    const newUser = {
      email: 'johndoe@example.com',
      username: 'johndoe',
      firstname: 'John',
      lastname: 'Doe',
      password: 'password'
    }

    try {
      const logIn = async () => {
        setIsLoading(true)
        await fetch(`${process.env.VERCEL_URL}/api/sign-up`, {
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
              placeholder="John Doe"
              type="username"
              autoCapitalize="none"
              autoComplete="username"
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

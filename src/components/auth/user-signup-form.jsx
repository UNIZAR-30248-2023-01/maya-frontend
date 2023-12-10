'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { LuGithub } from 'react-icons/lu'
import { useLang } from '@/context/language-context'
import { useRouter } from 'next/navigation'

export function UserSignUp ({ className, ...props }) {
  const { dictionary } = useLang()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password, firstname, lastname, username } = e.target
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
        await fetch('/api/sign-up', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(() => {
            setIsLoading(false)
            router.push('/sign-in')
          })
          .catch(error => console.error(error))
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
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Label className="sr-only" htmlFor="firstname">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder={dictionary.signup['signup-firstname']}
              type="firstname"
              autoCapitalize="none"
              autoComplete="firstname"
              autoCorrect="off"
              disabled={isLoading}
              required={true}
            />
          </div>
          <div className="col-span-1">
            <Label className="sr-only" htmlFor="lastname">
              Last Name
            </Label>
            <Input
              id="lastname"
              placeholder={dictionary.signup['signup-lastname']}
              type="lastname"
              autoCapitalize="none"
              autoComplete="lastname"
              autoCorrect="off"
              disabled={isLoading}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder={dictionary.signup['signup-username']}
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <Label className="sr-only" htmlFor="email">
              email
            </Label>
            <Input
              id="email"
              placeholder={dictionary.signup['signup-email']}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <Label className="sr-only" htmlFor="password">
            password
            </Label>
            <Input
              id="password"
              placeholder={dictionary.signup['signup-password']}
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              required={true}
            />
          </div>
          <Button disabled={isLoading} className="col-span-2">
            {dictionary.signin['signin-register']}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
          {dictionary.signup['signup-continuee']}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={() => signIn('github', { callbackUrl: '/home' })}
      >
        <LuGithub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}

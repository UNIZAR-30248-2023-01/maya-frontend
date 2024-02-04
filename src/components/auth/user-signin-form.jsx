'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { LuGithub } from 'react-icons/lu'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'
import { useRouter } from 'next/navigation'

export function UserSignIn ({ className, ...props }) {
  const router = useRouter()
  const { dictionary } = useLang()
  const [isLoading, setIsLoading] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = event.target

    try {
      const logIn = () => {
        return new Promise((resolve, reject) => {
          setIsLoading(true)
          signIn('credentials', {
            username: username.value,
            password: password.value,
            redirect: false
          })
            .then((res) => {
              if (res.status === 200) {
                setIsLoading(false)
                router.push('/organizations')
                resolve()
              }
              throw new Error(res.error)
            })
            .catch((error) => {
              setIsLoading(false)
              reject(error)
            })
        })
      }

      toast.promise(logIn, {
        loading: dictionary.auth['signin-loading'],
        success: () => dictionary.auth['signin-success'],
        error: () => dictionary.auth['signin-error']
      })
    } catch (error) {
      toast.error(error?.message)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder= {dictionary.signin['signin-username']}
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder= {dictionary.signin['signin-password']}
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button id="sign-in-button" disabled={isLoading} className="rounded-md border-2 border-custom-mustard hover:font-semibold hover:border-custom-mustard duration-300 bg-custom-mustard px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-mustard text-black">
          {dictionary.signin['signin-sigin']}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
          {dictionary.signin['signin-continuee']}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={() => signIn('github', { callbackUrl: '/organizations' })}
      >
        <LuGithub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}

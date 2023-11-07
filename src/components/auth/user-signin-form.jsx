"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { LuGithub } from "react-icons/lu"
import { toast } from "sonner"
import { useLang } from "@/context/language-context"

export function UserSignIn({ className, ...props }) {
  const { dictionary } = useLang()
  const [isLoading, setIsLoading] = useState(false)

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
            .then(() => {
              setIsLoading(false)
              resolve()
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
    <div className={cn("grid gap-6", className)} {...props}>
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
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            Sign In with Email
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
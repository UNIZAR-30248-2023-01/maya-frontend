'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserSignIn } from '@/components/auth/user-signin-form'
import { useLang } from '@/context/language-context'
import { usePathname } from 'next/navigation'

export default function SignInPage () {
  const { dictionary } = useLang()
  const path = usePathname()
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={'/' + path.split('/')[1] + '/sign-up'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        {dictionary.signin['signin-register']}
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <Link href={'/' + path.split('/')[1]}>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img
            className="w-14 h-auto"
            src="/logo.webp"
            alt="MaYA logo"
          />
            MaYA
          </div>
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;{dictionary.signin['signin-message']}&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
            {dictionary.signin['signin-login']}
            </h1>
            <p className="text-sm text-muted-foreground">
            {dictionary.signin['signin-email']}
            </p>
          </div>
          <UserSignIn />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {dictionary.signin['signin-continue']}{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              {dictionary.signin['signin-terms']}
            </Link>{' '}
            {dictionary.signin['signin-and']}{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              {dictionary.signin['signin-privacy']}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

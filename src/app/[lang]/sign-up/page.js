'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserSignUp } from '@/components/auth/user-signup-form'
import { useLang } from '@/context/language-context'
import { usePathname } from 'next/navigation'

export default function SignUpPage () {
  const { dictionary } = useLang()
  const path = usePathname()
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={'/' + path.split('/')[1] + '/sign-in'}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          {dictionary.signup['signup-login']}
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link href={'/' + path.split('/')[1]}>
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              MaYA
            </div>
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;{dictionary.signup['signup-message']}&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
              {dictionary.signup['signup-create']}
              </h1>
              <p className="text-sm text-muted-foreground">
              {dictionary.signup['signup-emails']}
              </p>
            </div>
            <UserSignUp />
            <p className="px-8 text-center text-sm text-muted-foreground">
              {dictionary.signup['signup-continue']}{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                {dictionary.signup['signup-terms']}
              </Link>{' '}
              {dictionary.signup['signup-and']}{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                {dictionary.signup['signup-privacy']}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

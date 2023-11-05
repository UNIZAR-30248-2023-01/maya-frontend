'use client'
import { UserAuthFormSignUp } from "@/components/login/user-auth-form-up"


import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

 
export function SignUp() {
  return (
    <Dialog>
    <DialogTrigger><button className="text-gray-700 text-xl font-medium">Sign Up</button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthFormSignUp />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}
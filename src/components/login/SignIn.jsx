'use client'
import { UserAuthFormIn } from "@/components/login/user-auth-form-in"

import Link from "next/link"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

 
export function SignIn() {
  return (
    <Dialog>
    <DialogTrigger><button className="text-white text-xl font-medium">Sign In</button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign with an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your username and password
              </p>
            </div>
            <UserAuthFormIn />
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
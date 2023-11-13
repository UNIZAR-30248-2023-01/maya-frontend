'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export function TeamMember ({
  user = {
    src: '/assets/avatars/memojis/4.webp',
    name: 'Sofia',
    lastname: 'Davis',
    username: 'm@example.com'
  }
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 group hover:cursor-pointer">
          <Avatar>
            <AvatarImage src={user.src} />
            <AvatarFallback>{user.name[0] + user.lastname[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{user.name + ' ' + user.lastname}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/settings">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/account">
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/appearance">
              Appearance
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/notifications">
              Notifications
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/display">
              Display
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <button onClick={() => signOut({ redirect: false })}>
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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
import { useLang } from '@/context/language-context'

export function TeamMember ({
  user = {
    src: '/assets/avatars/memojis/4.webp',
    name: 'Sofia',
    lastname: 'Davis',
    username: 'm@example.com'
  }
}) {
  const { dictionary } = useLang()

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
      <DropdownMenuLabel>{dictionary.settingsAccount['account-headline']}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/settings">
              {dictionary.settingsAccount['account-tab']}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/appearance">
              {dictionary.settingsAccount['apperance-tab']}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings/notifications">
              {dictionary.settingsAccount['notifications-tab']}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <button onClick={() => signOut({ redirect: false })}>
            {dictionary.settingsAccount['logout-tab']}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

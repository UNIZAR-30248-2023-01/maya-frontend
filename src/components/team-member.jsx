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
  image = '/assets/avatars/memojis/4.webp',
  firstname = 'Sofia',
  lastname = 'Davis',
  username = 'm@example.com',
  organization
}) {
  const { dictionary } = useLang()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id="team-member">
        <div className="flex items-center space-x-4 group hover:cursor-pointer">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className="uppercase">{firstname[0] + lastname[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none capitalize">{firstname} {lastname}</p>
            <p className="text-sm text-muted-foreground lowercase">@{username}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
      <DropdownMenuLabel>{dictionary.settingsAccount['account-headline']}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href={`/${organization}/settings`}>
            <DropdownMenuItem className="w-full cursor-pointer">
              {dictionary.settingsAccount['account-tab']}
            </DropdownMenuItem>
          </Link>
          <Link href={`/${organization}/settings/appearance`}>
            <DropdownMenuItem className="w-full cursor-pointer">
              {dictionary.settingsAccount['appearance-tab']}
            </DropdownMenuItem>
          </Link>
          <Link href={`/${organization}/settings/password`}>
            <DropdownMenuItem className="w-full cursor-pointer">
              {dictionary.settingsAccount['password-tab']}
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <button onClick={() => {
          signOut({ callbackUrl: '/' })
        }} id="sign-out-button" className="w-full">
          <DropdownMenuItem>
            {dictionary.settingsAccount['logout-tab']}
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

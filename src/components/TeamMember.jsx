'use client'

import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export function TeamMember ({ user }) {
  return (
      <Link href="/settings">
        <div className="flex items-center space-x-4 group hover:cursor-pointer">
          <Avatar>
            <AvatarImage src="/assets/avatars/memojis/4.webp" />
            <AvatarFallback>{user?.name.split(' ').at(0)[0].concat(user?.name.split(' ').at(1)[0])}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{user?.name ?? 'Sofia Davis'}</p>
            <p className="text-sm text-muted-foreground">{user?.email ?? 'm@example.com'}</p>
          </div>
        </div>
      </Link>
  )
}

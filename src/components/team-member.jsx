'use client'

import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export function TeamMember ({
  user = {
    src: '/assets/avatars/memojis/4.webp',
    name: 'Sofia',
    lastname: 'Davis',
    email: 'm@example.com'
  }
}) {
  return (
    <Link href="/home/settings">
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
    </Link>
  )
}

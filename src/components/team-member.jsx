'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Label } from './ui/label'

export function TeamMember ({
  user = {
    src: '/assets/avatars/memojis/4.webp',
    name: 'Sofia',
    lastname: 'Davis',
    email: 'm@example.com'
  }
}) {
  return (
      <div className="flex items-center space-x-4 group">
        <Avatar>
          <AvatarImage src={user.src} />
          <AvatarFallback>{user.name[0] + user.lastname[0]}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-0.5'>
          <Label className="text-sm font-medium leading-none capitalize">{user.name + ' ' + user.lastname}</Label>
          <Label className="text-sm text-muted-foreground font-normal">{user?.email}</Label>
        </div>
      </div>
  )
}

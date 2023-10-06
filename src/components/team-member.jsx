import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export function TeamMember () {
  return (
    <Link href="/settings">
      <div className="flex items-center space-x-4 group hover:cursor-pointer">
        <Avatar>
          <AvatarImage src="/assets/avatars/memojis/1.webp" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">m@example.com</p>
        </div>
      </div>
    </Link>
  )
}

'use client'

import { Label } from '@/components/ui/label'
import { format, parseISO } from 'date-fns'
import { useUser } from '@/context/user-context'

export function Comment ({
  date,
  comment,
  username
}) {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'PPP')
  const { user } = useUser()

  if (username === user.username) {
    return (
            <div className='flex justify-end'>
                <div className='p-4 pt-2 w-fit max-w-xl rounded-md flex flex-col gap-2 shadow-md bg-[#B2E7D8]'>
                    <div className='flex flex-row gap-4 items-center'>
                        <Label className='text-sm font-semibold'>{username}</Label>
                        <Label className='text-muted-foreground text-xs font-normal'>{formattedDate}</Label>
                    </div>
                    <Label className='text-sm pl-4'>{comment}</Label>
                </div>
            </div>
    )
  }
  return (
        <div className='p-4 pt-2 w-fit max-w-xl rounded-md flex flex-col gap-2 shadow-md bg-[#FFD1DC]'>
            <div className='flex flex-row gap-4 items-center'>
                <Label className='text-sm font-semibold'>{username}</Label>
                <Label className='text-muted-foreground text-xs font-normal'>{formattedDate}</Label>
            </div>
            <Label className='text-sm pl-4'>{comment}</Label>
        </div>
  )
}

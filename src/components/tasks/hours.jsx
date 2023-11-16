'use client'

import { Label } from '@/components/ui/label'
import { format, parseISO } from 'date-fns'

export function Hour ({
  hour,
  username,
  date
}) {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'PPP')
  return (

        <div className='p-4 pt-2 w-fit max-w-xl rounded-md flex flex-col gap-2 shadow-md bg-[#FFD1DC]'>
            <div className='flex flex-row gap-4 items-center'>
                <Label className='text-sm font-semibold'>{username}</Label>
                <Label className='text-muted-foreground text-xs font-normal'>{formattedDate}</Label>
                <Label className='text-sm pl-4'>{hour}</Label>
            </div>
        </div>
  )
}

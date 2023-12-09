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

        <div className='p-4 w-full rounded-md flex flex-row gap-2 justify-between shadow-md bg-[#efefef]'>
          <Label className='text-sm font-semibold text-left'>{username}</Label>
          <Label className='text-sm font-normal'>{formattedDate}</Label>
          <Label className='text-sm pl-4'>{hour}h</Label>
        </div>
  )
}

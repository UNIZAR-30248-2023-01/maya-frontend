'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Next PWA',
  description: 'Next PWA example using next-pwa and app directory'
}

export default function Page () {
  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'>
        <Button onClick={() => {
          toast.message('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm'
          })
        }}>
          Give me a toast
        </Button>
      </div>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}

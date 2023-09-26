'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export function Sonner ({ title, description, action }) {
  return (
    <Button onClick={() => toast.message(title, { description })}>
      {action}
    </Button>
  )
}

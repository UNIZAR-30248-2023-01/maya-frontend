'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { normalize } from '@/lib/utils'

export function Bool ({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={id} className='capitalize'>{normalize(label)}</Label>
    </div>
  )
}

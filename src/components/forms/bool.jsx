'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function Bool ({ label, value, ...props }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={label} checked={props.checked} onCheckedChange={props.onCheckedChange} />
      <Label htmlFor={label} className='capitalize'>{value}</Label>
    </div>
  )
}

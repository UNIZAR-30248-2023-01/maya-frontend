import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { normalize } from '@/lib/utils'

export function Number ({ label, placeholder, min, max }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label} className='capitalize'>{normalize(label)}</Label>
      <Input type="number" id={label} placeholder={placeholder} min={min} max={max} />
    </div>
  )
}

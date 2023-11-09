import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { normalize } from '@/lib/utils'

export function Number ({ id, label, placeholder, min, max, onChange }) {
  return (
    <div className="grid w-[300px] max-w-sm items-center gap-1.5">
      <Label htmlFor={label} className='capitalize'>{normalize(label)}</Label>
      <Input type="number" id={id} placeholder={placeholder} min={min} max={max} onChange={onChange} />
    </div>
  )
}

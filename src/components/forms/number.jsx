import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { normalize } from '@/lib/utils'

export function Number ({ label, placeholder, min, max, onChange }) {
  return (
    <div className="grid w-[200px] max-w-sm items-center gap-1.5">
      <Label htmlFor={label} className='capitalize'>{normalize(label)}</Label>
      <Input type="number" id={label} placeholder={placeholder} min={min} max={max} onChange={onChange} />
    </div>
  )
}

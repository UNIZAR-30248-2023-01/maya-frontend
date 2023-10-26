import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { normalize } from '@/lib/utils'

export function TextArea ({ id, label, placeholder, onChange }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id} className="capitalize">{normalize(label)}</Label>
      <Textarea id={id} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

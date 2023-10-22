import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { normalize } from '@/lib/utils'

export function Text ({ label, ...props }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id} className="capitalize">{normalize(label)}</Label>
      <Input type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

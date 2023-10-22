import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TextArea ({ label, ...props }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label} className="capitalize">{label}</Label>
      <Textarea id={props.id} placeholder={props?.placeholder} onChange={props.onChange} />
    </div>
  )
}

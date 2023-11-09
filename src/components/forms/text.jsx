import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn, normalize } from '@/lib/utils'

export function Text ({ id, label, placeholder, onChange, className, value }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id} className={cn('capitalize', className)}>{normalize(label)}</Label>
      <Input type='text' id={id} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  )
}

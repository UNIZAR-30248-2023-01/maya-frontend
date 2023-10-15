import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TextArea () {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Textarea placeholder="Type your message here." />
    </div>
  )
}

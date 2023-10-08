'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { supabaseClient } from '@/lib/supabase'
import { toast } from 'sonner'

export function CreateProject ({ dict }) {
  const handleSubmit = async (event) => {
    const { name, description } = event.target

    if (!name.value || !description) return

    const { error } = await supabaseClient.from('projects').insert([{
      name: name.value,
      description: description.value
    }])

    if (error) toast.message('Error', { message: JSON.stringify(error) })
    else toast.success('Success', { message: 'Project created successfully' })
  }

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{dict['new-project']}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={(e) => handleSubmit(e)}>
            <DialogHeader>
              <DialogTitle>{dict['new-table']}</DialogTitle>
              <DialogDescription>
                {dict['new-table-description']}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">{dict.name}</Label>
                <Input type="name" id="name" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="description">{dict.description}</Label>
                <Textarea placeholder={dict['description-placeholder']} id="description" maxLength="150" />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
              >
                {dict['create-action']}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  )
}

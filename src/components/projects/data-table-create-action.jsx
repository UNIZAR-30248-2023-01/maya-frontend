'use client'

import { useState } from 'react'
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
import { useLang } from '@/context/language-context'
// import { supabaseClient } from '@/lib/supabase'
import { toast } from 'sonner'

export function DataTableCreateAction () {
  const { dictionary } = useLang()
  const [open, setOpen] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    // const { name, description } = event.target

    // if (!name.value || !description) return

    // const { error } = await supabaseClient.from('projects').insert([{
    //   name: name.value,
    //   description: description.value
    // }])

    // if (error) toast.message('Error', { message: JSON.stringify(error) })
    // else toast.success('Success', { message: 'Project created successfully' })
    toast.message('Success', { description: 'Project created successfully' })
    setOpen(false)
  }

  return (
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button className="capitalize">{dictionary.projects['new-project']}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={(e) => handleSubmit(e)}>
            <DialogHeader>
              <DialogTitle className="capitalize">{dictionary.projects['new-table']}</DialogTitle>
              <DialogDescription>
                {dictionary.projects['new-table-description']}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name" className="capitalize">{dictionary.projects['new-table-name']}</Label>
                <Input type="name" id="name" required={true} />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="description">{dictionary.projects['new-table-desc']}</Label>
                <Textarea placeholder={dictionary.projects['new-table-desc-placeholder']} id="description" maxLength="150" required={true} />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
              >
                {dictionary.projects['new-table-create']}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  )
}

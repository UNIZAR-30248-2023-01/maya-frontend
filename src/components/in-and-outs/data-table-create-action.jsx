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
import { toast } from 'sonner'
import { supabase } from '@/lib/utils'

export function DataTableCreateAction () {
  const { dictionary } = useLang()
  const [open, setOpen] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, description } = event.target

    const createProject = (name, description) => {
      return new Promise((resolve, reject) => {
        supabase.from('projects').insert([{
          name,
          description
        }])
          .then(() => resolve())
          .catch((error) => reject(error))
      })
    }

    toast.promise(createProject(name.value, description.value), {
      loading: dictionary.inandouts['toast-loading'],
      success: () => {
        setOpen(false) // Cerrar el diálogo después de un éxito
        return dictionary.inandouts['toast-success']
      },
      error: () => dictionary.inandouts['toast-error']
    })
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button id='new-project' className="capitalize">{dictionary.inandouts['new-project']}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle className="capitalize">{dictionary.inandouts['new-table']}</DialogTitle>
            <DialogDescription>
              {dictionary.inandouts['new-table-description']}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name" className="capitalize">{dictionary.inandouts['new-table-name']}</Label>
              <Input type="name" id="name" required={true} />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">{dictionary.inandouts['new-table-desc']}</Label>
              <Textarea placeholder={dictionary.inandouts['new-table-desc-placeholder']} id="description" maxLength="150" required={true} />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full"
            >
              {dictionary.inandouts['new-table-create']}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

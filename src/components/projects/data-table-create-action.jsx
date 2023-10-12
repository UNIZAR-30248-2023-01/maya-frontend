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
// import { supabaseClient } from '@/lib/supabase'
// import { toast } from 'sonner'

export function DataTableCreateAction () {
  const handleSubmit = async (event) => {
    // const { name, description } = event.target

    // if (!name.value || !description) return

    // const { error } = await supabaseClient.from('projects').insert([{
    //   name: name.value,
    //   description: description.value
    // }])

    // if (error) toast.message('Error', { message: JSON.stringify(error) })
    // else toast.success('Success', { message: 'Project created successfully' })
  }

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>New Project</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={(e) => handleSubmit(e)}>
            <DialogHeader>
              <DialogTitle>New Table</DialogTitle>
              <DialogDescription>
                Projects are a customizable, flexible tool for planning and tracking your work.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" required={true} />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="description">Short description</Label>
                <Textarea placeholder='A short description about this project.' id="description" maxLength="150" required={true} />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
              >
                Create
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  )
}

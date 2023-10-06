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

export function CreateProject ({ dict }) {
  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{dict['new-project']}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{dict['new-table']}</DialogTitle>
            <DialogDescription>
              {dict['new-table-description']}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="project-name">{dict.name}</Label>
              <Input type="project-name" id="project-name" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">{dict.description}</Label>
              <Textarea placeholder={dict['description-placeholder']} id="description" maxLength="150" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">{dict['create-action']}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

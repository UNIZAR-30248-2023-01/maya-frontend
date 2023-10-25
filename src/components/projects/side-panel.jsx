'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import * as Field from '@/components/forms/package'
import { useLang } from '@/context/language-context'
import { projectSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'

export function SidePanel ({
  title,
  description,
  triggerBtn,
  actionBtn
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(projectSchema._def.shape()))

  const setter = ({ key, value, type }) => {
    if (type === 'bool') {
      const { values } = projectSchema._def.shape()[key]._def.innerType._def
      return setForm({ ...form, [key]: values[Number(!value)] })
    }
    return setForm({ ...form, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      projectSchema.parse({ ...form, organization: 'reign' })
      const createProject = () => {
        return new Promise((resolve, reject) => {
          supabase.from('projects').insert([{ ...form, organization: 'reign' }])
            .then(() => {
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?select=*`)
              resolve()
            })
            .catch((error) => reject(error))
        })
      }

      toast.promise(createProject, {
        loading: dictionary.projects['toast-loading'],
        success: () => dictionary.projects['toast-success'],
        error: () => dictionary.projects['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button id="new-project" variant="outline" className='capitalize'>{triggerBtn}</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={e => handleSubmit(e)}>
          <SheetHeader>
            <SheetTitle className="capitalize">{title}</SheetTitle>
            <SheetDescription>
              {description}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Field.Text
              id="name"
              label={dictionary.projects['name-column']}
              placeholder={dictionary.projects['new-table-name-placeholder']}
              onChange={(e) => setter({ key: 'name', value: e.target.value })}
            />
            <Field.TextArea
              id="description"
              label={dictionary.projects['description-column']}
              placeholder={dictionary.projects['new-table-desc-placeholder']}
              onChange={(e) => setter({ key: 'description', value: e.target.value })}
            />
            <Field.Bool
              id="visibility"
              label={dictionary.projects.public}
              checked={form.visibility === 'public'}
              onChange={(checked) => setter({ key: 'visibility', value: checked, type: 'bool' })}
            />
          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button
                type="submit"
              >
                {actionBtn}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

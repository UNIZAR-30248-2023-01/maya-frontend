'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ComboboxEnum } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { roleSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { roles } from '@/lib/constants'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { DialogClose } from '@radix-ui/react-dialog'
// import { RemoveUser } from './remove-user'

export function RoleChange ({
  title,
  description,
  actionBtn,
  deleteTitle,
  deleteDescription,
  username,
  defaultRole,
  id
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(roleSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { role } = form

    try {
      roleSchema.parse({ role })
      if (defaultRole !== role) {
        const changeRole = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('people').update({ role })
                .eq('username', username)
                .select()
                .then(() => {
                // Actualización de los datos en la interfaz
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=username,firstname,lastname,avatar,role`)
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(changeRole, {
          loading: dictionary.people['toast-role-loading'],
          success: () => dictionary.people['toast-role-success'],
          error: () => dictionary.people['toast-error']
        })
      }
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id={id}
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={e => handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle className='capitalize'>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full items-end space-x-2 mt-4 gap-6">
            <div className="flex flex-row w-full items-end space-x-2 mt-4">
              <div className='grid gap-4 w-full'>
                <ComboboxEnum
                  id='role-edit'
                  label={dictionary.people.role}
                  list={roles}
                  value={form.role || defaultRole}
                  dictionary={dictionary.roles}
                  searchDictionary={dictionary.search}
                  onChange={(e) => {
                    const original = Object.keys(dictionary.roles).find(key => key === e)
                    setter({ key: 'role', value: original === form.role ? null : original })
                  }}
                />
              </div>
              <DialogClose asChild>
                <Button id='confirm-edit' type="submit" className="capitalize min-w-fit">{actionBtn}</Button>
              </DialogClose>
            </div>
            {/* <RemoveUser username={username} title={deleteTitle} description={deleteDescription} /> */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

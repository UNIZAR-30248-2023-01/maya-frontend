'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form
} from '@/components/ui/form'
import {
  SheetDescription
} from '@/components/ui/sheet'
import { toast } from 'sonner'
import { getForm, supabase } from '@/lib/utils'
import { mutate } from 'swr'
import { useLang } from '@/context/language-context'
import { accountFormSchema } from '@/lib/schemas'
import { Text } from '@/components/forms'
import { PopupProfile } from '@/components/settings/popup-profile.jsx'
import { useUser } from '@/context/user-context'

export function AccountForm () {
  const [form, setForm] = useState({ password: null, ...getForm(accountFormSchema._def.shape()) })
  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const [loading, setLoading] = useState(false)

  const { user } = useUser()

  const { dictionary } = useLang()

  console.log('User: ', user)

  useEffect(() => {
    console.log('El useEffect se ha ejecutado')

    const fetchData = () => {
      if (user !== undefined && !loading) {
        console.log('El if de useEffect se ha ejecutado')

        setForm({
          ...form,
          avatar: user.avatar,
          firstname: user.firstname,
          lastname: user.lastname
        })
        setLoading(true)
      }
    }

    fetchData()
  }, [user, loading])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      accountFormSchema.parse({ ...form })
      const updateUserAccount = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            if (form.password !== null) {
              await fetch('http://localhost:3000/api/change-password', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: form.password })
              })
                .then((res) => res.status ? resolve() : reject(new Error(res.status)))
                .catch((error) => reject(error))
            }

            await supabase.from('people')
              .update({ firstname: form.firstname, lastname: form.lastname })
              .eq('username', user?.username)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${user?.email}&select=username,firstname,lastname,email,avatar`)
                resolve()
              })
              .catch((error) => reject(error))
          })()
        })
      }

      toast.promise(updateUserAccount, {
        loading: dictionary.settingsAccount['toast-loading'],
        success: () => dictionary.settingsAccount['toast-success'],
        error: () => dictionary.settingsAccount['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Form>
      <form onSubmit={e => handleSubmit(e)} className="space-y-8">
        <div className="flex space-x-4 items-center">
          <div className="flex-1">
            <Text
              label={dictionary.settingsAccount['user-username']}
              id="username"
              value={user?.username}
            />
            <SheetDescription style={{ marginTop: '5px' }}>
                {dictionary.settingsAccount['message-username']}
            </SheetDescription>
          </div>
          <PopupProfile user={user} />
          </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Text
              label={dictionary.settingsAccount['user-firstname']}
              id="firstname"
              value={form.firstname}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    e.target.classList.remove('border-red-500')
                    setter({ key: 'firstname', value: e.target.value })
                  } else {
                    e.target.classList.add('border-red-500')
                    // toast.error(dictionary.settingsAccount['error-firstname'])
                  }
                }}
            />
          </div>
          <div className="flex-1">
            <Text
                label={dictionary.settingsAccount['user-lastname']}
                id="lastname"
                value={form.lastname}
                onChange={(e) => {
                  e.target.classList.remove('border-red-500')
                  setter({ key: 'lastname', value: e.target.value })
                }}
              />
            </div>
        </div>
        <Text
          label={dictionary.settingsAccount['user-email']}
          id="email"
          value={user?.email}
        />
        <SheetDescription style={{ marginTop: '5px' }}>
            {dictionary.settingsAccount['message-email']}
        </SheetDescription>
        <Text
            label={dictionary.settingsAccount['user-password']}
            placeholder="***********"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                e.target.classList.remove('border-red-500')
                setter({ key: 'password', value: e.target.value })
              } else {
                e.target.classList.add('border-red-500')
                // toast.error(dictionary.settingsAccount['error-lastname'])
              }
            }}
        />
        <Text
          label={dictionary.settingsAccount['user-password-confirm']}
          placeholder="***********"
          onChange={(e) => {
            if (form.password !== null) {
              if (e.target.value.length > 8) {
                e.target.classList.remove('border-red-500')
                if (form.password !== e.target.value) {
                  toast.error(dictionary.settingsAccount['error-same-password'])
                } else {
                  e.target.classList.remove('border-red-500')
                  setter({ key: 'password', value: e.target.value })
                }
              } else {
                e.target.classList.add('border-red-500')
                // toast.error(dictionary.settingsAccount['error-lastname'])
              }
            } else {
              e.target.value = ''
              toast.error(dictionary.settingsAccount['error-full-new-password'])
            }
          }}
        />
        <Button type="submit" className="text-black bg-custom-mustard" style={{ marginTop: '20px' }}>{dictionary.settingsAccount['account-update']}</Button>
        </form>
    </Form>
  )
}

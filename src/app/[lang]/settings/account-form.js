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
import { useSession } from 'next-auth/react'
import { PopupProfile } from '@/components/settings/popup-profile.jsx'

export function AccountForm () {
  const [form, setForm] = useState({ password: null, ...getForm(accountFormSchema._def.shape()) })
  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const defaultAvatar = '/assets/avatars/memojis/4.webp'
  const [isPopupOpen, setPopupOpen] = useState(false)

  const [loading, setLoading] = useState(true)
  console.log('loading', loading)

  const { dictionary } = useLang()

  const { data: session } = useSession()

  console.log('session', session)

  // const { data: accountData } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${session.user.email}&select=*`)
  // console.log('accountData', accountData)

  useEffect(() => {
    console.log('El useEffect se ha ejecutado y el sidepanel está abierto')
    const fetchData = async () => {
      if (session && session.user && loading) {
        const { data: accountData } = await supabase
          .from('people')
          .select('*')
          .eq('email', session.user.email)

        console.log('accountData', accountData)

        if (accountData && accountData.length > 0) {
          setForm({
            ...form,
            username: accountData[0].username,
            email: accountData[0].email,
            avatar: accountData[0].avatar,
            firstname: accountData[0].firstname,
            lastname: accountData[0].lastname
          })
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [loading && session])
  /*
  if (accountData !== undefined && !loading) {
    if (accountData !== undefined && !loading) {
      console.log('El useEffect se ha ejecutado y el sidepanel está abierto')
      setForm({
        ...form,
        username: accountData[0].username,
        email: accountData[0].email,
        avatar: accountData[0].avatar,
        firstname: accountData[0].firstname,
        lastname: accountData[0].lastname
      })
      setLoading(true)
    }
  } */

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('form', form)

    try {
      accountFormSchema.parse({ ...form })
      const updateUserAccount = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('people')
              .update({ firstname: form.firstname, lastname: form.lastname })
              .eq('email', session.user.email)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${session.user.email}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?firstname=eq.${form.firstname}&lastname=eq.${form.lastname}&select=*`)
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
      <form onSubmit={e => handleSubmit(e)} className="space-y-8"></form>
      <div className="flex space-x-4 items-center">
        <div className="flex-1">
          <Text
            label={dictionary.settingsAccount['user-username']}
            id="username"
            value={form.username}
          />
          <SheetDescription style={{ marginTop: '5px' }}>
              {dictionary.settingsAccount['message-username']}
          </SheetDescription>
        </div>
        <div className="flex-shrink-0" onClick={() => setPopupOpen(true)}>
          <img
            src={form.avatar ? form.avatar : defaultAvatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full"
          />
          {isPopupOpen && (
            <PopupProfile
              username={form.username}
              isPopupOpen={true}
              setPopupOpen={setPopupOpen}
            />
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <Text
            label={dictionary.settingsAccount['user-firstname']}
            id="firstname"
            value={form.firstname}
            onChange={(e) => {
              e.target.classList.remove('border-red-500')
              setter({ key: 'firstname', value: e.target.value })
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
        value={form.email}
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
            console.log('form ', form)
            console.log('form.password ', form.password)
            if (form.password !== null) {
              if (e.target.value.length > 8) {
                e.target.classList.remove('border-red-500')
                // setter({ key: 'lastname', value: e.target.value })
              } else {
                e.target.classList.add('border-red-500')
                // toast.error(dictionary.settingsAccount['error-lastname'])
              }
            } else {
              console.log('estoy  aqui')
              e.target.value = ''
              toast.error(dictionary.settingsAccount['error-full-new-password'])
            }
          }}
        />
      <Button type="submit" style={{ marginTop: '20px' }}>Update account</Button>
    </Form>
  )
}

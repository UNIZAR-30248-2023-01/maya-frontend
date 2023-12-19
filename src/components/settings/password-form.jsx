'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form
} from '@/components/ui/form'
import { toast } from 'sonner'
import { getForm } from '@/lib/utils'
import { useLang } from '@/context/language-context'
import { accountFormSchema } from '@/lib/schemas'
import { TextPassword } from '@/components/forms/textPassword'

export function PasswordForm () {
  const [form, setForm] = useState({ password: null, ...getForm(accountFormSchema._def.shape()) })
  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const [pssword, setPassword] = useState('')

  const { dictionary } = useLang()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      accountFormSchema.parse({ ...form })
      const updateUserAccount = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            if (form.password !== null && pssword === form.password) {
              await fetch(`${process.env.VERCEL_URL}/api/change-password`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: form.password })
              })
                .then((res) => res.status ? resolve() : reject(new Error(res.status)))
                .catch((error) => reject(error))
            } else if (form.password === null || form.password === '' || pssword === '') {
              reject(new Error(dictionary.settingsAccount['error-empty-password']))
            } else if (form.password !== pssword) {
              reject(new Error(dictionary.settingsAccount['error-same-password']))
            }
          })()
        })
      }

      toast.promise(updateUserAccount, {
        loading: dictionary.settingsAccount['toast-loading'],
        success: () => dictionary.settingsAccount['toast-success'],
        error: (error) => {
          if (error.message === dictionary.settingsAccount['error-empty-password']) {
            return dictionary.settingsAccount['error-empty-password']
          } else if (error.message === dictionary.settingsAccount['error-same-password']) {
            return dictionary.settingsAccount['error-same-password']
          } else {
            return dictionary.settingsAccount['toast-error']
          }
        }
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Form>
      <form onSubmit={e => handleSubmit(e)} className="space-y-8">
        <TextPassword
            label={dictionary.settingsAccount['user-password']}
            placeholder="***********"
            type="password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setPassword(e.target.value)
              }
            }}
        />
        <TextPassword
          label={dictionary.settingsAccount['user-password-confirm']}
          placeholder="***********"
          type="password"
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect="off"
          onChange={(e) => {
            setter({ key: 'password', value: e.target.value })
          }}
        />
        <Button id="buttonUpdate" type="submit" className="text-black hover:bg-custom-lighterYellow bg-custom-mustard" style={{ marginTop: '20px' }}>{dictionary.settingsAccount['account-update']}</Button>
        </form>
    </Form>
  )
}

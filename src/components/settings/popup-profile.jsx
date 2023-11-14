'use client'
// Importa useState y useEffect si no están ya importados
import { Button } from '@/components/ui/button'
import { SheetTitle } from '@/components/ui/sheet'
import { accountFormSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { mutate } from 'swr'
import { useState } from 'react'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'
import {
  Form
} from '@/components/ui/form'

export function PopupProfile ({
  username,
  isPopupOpen,
  setPopupOpen
}) {
  const [form, setForm] = useState({ password: null, ...getForm(accountFormSchema._def.shape()) })
  const setter = ({ key, value }) => setForm({ ...form, [key]: value })
  const [selectedAvatar, setSelectedAvatar] = useState()

  const { dictionary } = useLang()

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar)
    setter({ key: 'avatar', value: avatar })
  }

  const memojiList = []
  for (let i = 1; i <= 28; i++) {
    const imagePath = `/assets/avatars/memojis/${i}.webp`
    memojiList.push(imagePath)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('foooooorm', form)

    try {
      accountFormSchema.parse({ ...form })
      const updateUserProfile = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('people')
              .update({ firstname: form.firstname, lastname: form.lastname })
              .eq('username', username)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?username=eq.${username}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?avatar=eq.${form.avatar}&select=*`)
                resolve()
              })
              .catch((error) => reject(error))
          })()
        })
      }

      toast.promise(updateUserProfile, {
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
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <SheetTitle>Selecciona</SheetTitle>
            <div className="grid grid-cols-10 gap-4" style={{ marginTop: '20px' }}>
              {memojiList.map((memoji, index) => (
                <img
                  key={index}
                  src={memoji}
                  alt={`Memoji ${index + 1}`}
                  className={`w-16 h-16 cursor-pointer ${selectedAvatar === memoji ? 'border-2 border-black rounded-full' : 'rounded-full'}`}
                  onClick={() => handleSelectAvatar(memoji)}
                />
              ))}
            </div>

            <div className="flex justify-end mt-4" style={{ marginTop: '20px' }}>
              <Button type="submit" onClick={handleSubmit}>Update account</Button>
              <Button onClick={() => setPopupOpen(false)} className="ml-2">Cancelar </Button>
            </div>
          </div>
        </div>
      )}
    </Form>
  )
}

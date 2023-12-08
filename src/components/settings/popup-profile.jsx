'use client'
// Importa useState y useEffect si no están ya importados
import { Button } from '@/components/ui/button'
import { accountFormSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { mutate } from 'swr'
import { useState } from 'react'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function PopupProfile ({
  user
}) {
  // console.log('username', username)

  const originalAvatar = user?.avatar ? user?.avatar : '/assets/avatars/memojis/4.webp'

  const [form, setForm] = useState({ password: null, ...getForm(accountFormSchema._def.shape()) })
  // const setter = ({ key, value }) => setForm({ ...form, [key]: value })
  const setter = ({ key, value }) => {
    setForm({ ...form, [key]: value })
    console.log('Form updated: ', form)
    console.log('Key: ', key)
    console.log('Value: ', value)
  }

  const [selectedAvatar, setSelectedAvatar] = useState(originalAvatar)

  const { dictionary } = useLang()

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar)
  }

  const memojiList = []
  for (let i = 1; i <= 28; i++) {
    const imagePath = `/assets/avatars/memojis/${i}.webp`
    memojiList.push(imagePath)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      accountFormSchema.parse({ username: user?.username, ...form })
      const updateUserProfile = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('people')
              .update({ avatar: form.avatar })
              .eq('username', user?.username)
              .then(() => {
                console.log('Updated profile')
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?username=eq.${user?.username}&avatar=eq.${originalAvatar}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?username=eq.${user?.username}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${user?.email}&select=username,firstname,lastname,email,avatar`)
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
    <Dialog>
      <DialogTrigger><img
        src={originalAvatar || form.avatar}
        alt=""
        className="w-24 h-24 rounded-full"
      /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dictionary.settingsAccount['pick-avatar']}</DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-6 gap-4" style={{ marginTop: '20px' }}>
              {memojiList.map((memoji, index) => (
                <img
                  key={index}
                  src={memoji}
                  alt={`Memoji ${index + 1}`}
                  className={`w-16 h-16 cursor-pointer ${selectedAvatar === memoji ? 'border-2 border-black rounded-full' : 'rounded-full'}`}
                  onClick={() => {
                    handleSelectAvatar(memoji)
                    setter({ key: 'avatar', value: memoji })
                  }}
                />
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4" style={{ marginTop: '20px' }}>
          <Button type='submit' onClick={handleSubmit}>{dictionary.settingsAccount['update-avatar']}</Button>
        </div>
        {/* <DialogFooter>
          <DialogClose className="flex justify-end mt-4" style={{ marginTop: '20px' }} onClick={handleSubmit}>
            {dictionary.settingsAccount['update-avatar']}
          </DialogClose>
        </DialogFooter> */}

      </DialogContent>
    </Dialog>

  )
}

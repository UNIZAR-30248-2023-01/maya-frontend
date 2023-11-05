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
import { inAndOutsSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'

export function ClockIn ({
  triggerBtn,
  setIsClockInVisible,
  setIsClockOutVisible
}) {

  const { dictionary } = useLang()
  const [form, setForm] = useState({ in_hour: '', out_hour: '', ...getForm(inAndOutsSchema._def.shape())}) // devuelve unos objetos

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  form.in_date = new Date(new Date().getTime());
  form.in_hour = getCurrentTime().toString();

  console.log("form ", form)
  console.log("out_date ", typeof form.out_date)
  console.log("out_hour ", typeof form.out_hour)

  const handleSubmit = async () => {
    //e.preventDefault()

    const { in_hour, out_hour, in_date, out_date, ...data } = form // eliminamos los campos in_hour y out_hour del form

    const timestampIn = new Date(in_date.getFullYear(), in_date.getMonth(), in_date.getDate(), in_hour.split(":")[0], in_hour.split(":")[1])

    //setIsClockInVisible(false)
    //setIsClockOutVisible(true)
    

    try {
      inAndOutsSchema.parse({ in_date, out_date, total: 0})
      const createManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').insert([{ 
            username: 'hec7orci7o', 
            in_date: timestampIn,            
            out_date: null,
            total: 0
          }])
            .then(() => {
              setIsSheetOpen(true)
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
              resolve()
            })
            .catch((error) => {
              reject(error); 
            })
        })
      }

      toast.promise(createManualClockin, {
        loading: dictionary.inandouts['toast-loading'],
        success: () => dictionary.inandouts['toast-success'],
        error: () => dictionary.inandouts['toast-error']
      })
    } catch (error) { 
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    
        <Button id="new-date" variant="outline" className='capitalize' onClick={handleSubmit}>{triggerBtn}</Button>
     
  )
}

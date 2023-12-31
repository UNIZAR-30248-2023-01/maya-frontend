'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useLang } from '@/context/language-context'
import { inAndOutsSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import useSWR, { mutate } from 'swr'
import { useUser } from '@/context/user-context'

export function ClockOut ({
  triggerBtn,
  organization
}) {
  const { user } = useUser()

  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&organization=eq.${organization}&out_date=is.null&select=*`)

  const { dictionary } = useLang()
  const [form] = useState({ in_hour: '', out_hour: '', ...getForm(inAndOutsSchema._def.shape()) }) // devuelve unos objetos

  function getCurrentTime () {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }

  form.out_date = new Date(new Date().getTime())
  form.out_hour = getCurrentTime().toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    /* eslint-disable camelcase */
    const { out_hour, in_date, out_date } = form // eliminamos los campos in_hour y out_hour del form

    const fecha = new Date(inAndOuts[0].in_date)
    const year = fecha.getFullYear()
    const month = fecha.getMonth()
    const day = fecha.getDate()
    const hour = fecha.getHours()
    const minute = fecha.getMinutes()

    const timestampIn = new Date(year, month, day, hour, minute)
    const timestampOut = new Date(out_date.getFullYear(), out_date.getMonth(), out_date.getDate(), out_hour.split(':')[0], out_hour.split(':')[1])

    console.log('timestampIn aaaaaaaaaaaa ', typeof timestampIn, timestampIn)
    console.log('timestampOut aaaaaaaaaaaa ', typeof timestampOut, timestampOut)

    const tiempoEnMilisegundos = timestampOut - timestampIn
    const horasTotales = tiempoEnMilisegundos / (1000 * 60)
    const minutosTotales = Math.round(horasTotales)

    console.log('minutosTotales ', minutosTotales)

    // setIsClockOutVisible(false)
    // setIsClockInVisible(true)

    try {
      inAndOutsSchema.parse({ in_date, out_date, total: 0 })

      const createClockOut = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('in-and-outs')
              .update({ out_date: timestampOut, total: minutosTotales })
              .eq('id', inAndOuts[0].id)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&organization=eq.${organization}&in_date=eq.${timestampIn}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&organization=eq.${organization}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&organization=eq.${organization}&out_date=is.null&select=*`)
                resolve()
              })
              .catch((error) => reject(error))
          })()
        })
      }

      toast.promise(createClockOut, {
        loading: dictionary.inandouts['toast-loading'],
        success: () => dictionary.inandouts['toast-success'],
        error: () => dictionary.inandouts['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      console.log('erroooooor ', error)
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Button id="new-automatic-out-date" className='capitalize hover:bg-custom-lighterYellow text-black bg-custom-mustard' onClick={handleSubmit}>{triggerBtn}</Button>
  )
}

'use client'

import { useState, useEffect } from 'react'
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
import useSWR, { mutate } from 'swr'
import { LuClipboardEdit } from 'react-icons/lu'

export function SidePanelEdit ({
  title,
  description,
  descriptionIn,
  descriptionOut,
  actionBtn,
  fechaEntrada,
  fechaSalida,
  deleteBtn
}) {
  const [errorOutHour, setErrorOutHour] = useState('')
  const [errorInHour, setErrorInHour] = useState('')
  const [invalidHour] = useState(true)

  const { dictionary } = useLang()

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

  const handleOpenSidePanel = () => {
    setIsSidePanelOpen(true)
  }

  const handleCloseSidePanel = () => {
    setIsSidePanelOpen(true)
  }

  const [form, setForm] = useState({ in_hour: '', out_hour: '', ...getForm(inAndOutsSchema._def.shape()) }) // devuelve unos objetos

  const initialDate = new Date(fechaEntrada)
  const finalDate = new Date(fechaSalida)
  const initialHour = initialDate.getHours() + ':' + initialDate.getMinutes()
  const finalHour = finalDate.getHours() + ':' + finalDate.getMinutes()

  console.log('initialDate ', typeof initialDate, initialDate)
  console.log('finalDate ', typeof finalDate, finalDate)

  // Formatea las fechas en formato ISO8601
  const formattedInitialDate = initialDate.toISOString()
  const formattedFinalDate = finalDate.toISOString()

  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?in_date=eq.${formattedInitialDate}&out_date=eq.${formattedFinalDate}&select=*`)

  // useEffect para actualizar el estado del formulario con los valores iniciales
  useEffect(() => {
    console.log('El useEffect se ha ejecutado')
    if (isSidePanelOpen) {
      console.log('El useEffect se ha ejecutado y el sidepanel está abierto')
      setForm({
        ...form,
        in_hour: initialHour,
        out_hour: finalHour,
        in_date: initialDate,
        out_date: finalDate
        // ... otras propiedades del formulario según tu esquema
      })
    }
  }, [isSidePanelOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Expresión regular para verificar el formato hh:mm
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

    if (!regex.test(form.in_hour)) {
      toast.error(dictionary.inandouts['error-hour'])
      setErrorInHour(dictionary.inandouts['error-hour'])
      return
    } if (!regex.test(form.out_hour)) {
      toast.error(dictionary.inandouts['error-hour'])
      setErrorOutHour(dictionary.inandouts['error-hour'])
      return
    } else if (form.in_hour > form.out_hour) {
      toast.error(dictionary.inandouts['error-in-hour'])
      setErrorInHour(dictionary.inandouts['error-in-hour'])
      return
    } else {
      setErrorInHour('')
      setErrorOutHour('')
    }

    /* eslint-disable camelcase */
    const { in_hour, out_hour, in_date, out_date } = form // eliminamos los campos in_hour y out_hour del form

    const timestampIn = new Date(in_date.getFullYear(), in_date.getMonth(), in_date.getDate(), in_hour.split(':')[0], in_hour.split(':')[1])
    const timestampOut = new Date(out_date.getFullYear(), out_date.getMonth(), out_date.getDate(), out_hour.split(':')[0], out_hour.split(':')[1])

    const tiempoEnMilisegundos = timestampOut - timestampIn
    const horasTotales = tiempoEnMilisegundos / (1000 * 60)
    const horasRedondeadas = Math.round(horasTotales)

    /* mutate : actualiza la interfaz */

    try {
      inAndOutsSchema.parse({ in_date, out_date, total: 0 })
      const createManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').update({
            in_date: timestampIn,
            out_date: timestampOut,
            total: horasRedondeadas
          })
            .eq('id', inAndOuts[0].id)
            .then(() => {
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?in_date=eq.${timestampIn}&out_date=eq.${timestampOut}&total=eq.${horasRedondeadas}&select=*`)
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
              resolve()
            })
            .catch((error) => {
              reject(error)
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

  const handleDelete = async () => {
    console.log('inAndOuts de handleDelete ', inAndOuts)

    try {
      inAndOutsSchema.parse({ in_date: null, out_date: null, total: 0 })
      const deleteManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').delete().eq('id', inAndOuts[0].id)
            .then(() => {
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        })
      }

      toast.promise(deleteManualClockin, {
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
    <Sheet>
      <SheetTrigger className='py-3' onClick={handleOpenSidePanel}><LuClipboardEdit className="h-5 w-5 flex-shrink-0" aria-hidden="true" /></SheetTrigger>
      <SheetContent>
        <form onSubmit={e => handleSubmit(e)}>
          <SheetHeader>
            <SheetTitle className="capitalize">{title}</SheetTitle>
            <SheetDescription style={{ marginBottom: '20px' }}>
              {description}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <SheetDescription>
              {descriptionIn}
            </SheetDescription>

            <Field.DatePicker
              label={dictionary.inandouts['in-column']}
              value={form.in_date}
              placeholder={dictionary.inandouts['new-table-in-placeholder']}
              onChange={(e) => {
                if (form.out_date !== null && form.out_date < e) {
                  toast.error(dictionary.inandouts['error-in-date'])
                } else {
                  setter({ key: 'in_date', value: e || null })
                }
              }}
            />

            <div className="w-[65px]">
              <Field.Text
                id="in_hour"
                value={form.in_hour}
                placeholder={dictionary.inandouts['new-table-hour-placeholder']}
                onChange={(e) => {
                  const inputHour = e.target.value
                  setter({ key: 'in_hour', value: inputHour })
                }}
              />
            </div>

            <SheetDescription className="text-red-500">
              {errorInHour}
            </SheetDescription>

            <SheetDescription style={{ marginTop: '20px' }}>
              {descriptionOut}
            </SheetDescription>

            <Field.DatePicker
              id="out_date"
              label={dictionary.inandouts['out-column']}
              value={form.out_date}
              placeholder={dictionary.inandouts['new-table-out-placeholder']}
              onChange={(e) => {
                if (e < form.in_date) {
                  console.log('form.in_date ', form.in_date.Date)
                  toast.error(dictionary.inandouts['error-out-date'])
                } else {
                  setter({ key: 'out_date', value: e })
                }
              }}
            />

            <div className="w-[65px]">
                <Field.Text
                  id="out_hour"
                  placeholder={dictionary.inandouts['new-table-hour-placeholder']}
                  value={form.out_hour}
                  onChange={(e) => {
                    const inputHour = e.target.value
                    setter({ key: 'out_hour', value: inputHour })
                  }}
                />
              </div>

            <SheetDescription className="text-red-500">
              {errorOutHour}
            </SheetDescription>

          </div>
          <SheetFooter className="">
            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleDelete}>
              {deleteBtn}
            </Button>

            <SheetClose asChild onClose={handleCloseSidePanel}>
              <Button type="submit" disabled={!form.in_date || !form.out_date || !form.in_hour || !form.out_hour || !invalidHour}>
                {actionBtn}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

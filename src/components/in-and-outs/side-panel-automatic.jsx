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

export function SidePanelAutomatic ({
  title,
  description,
  descriptionIn,
  descriptionOut,
  triggerBtn,
  actionBtn
}) {
  const [errorOutHour, setErrorOutHour] = useState('');
  const [invalidHour, setInvalidHour] = useState(true);

  const { dictionary } = useLang()
  const [form, setForm] = useState({ out_hour: '', ...getForm(inAndOutsSchema._def.shape())}) // devuelve unos objetos

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })


  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const actualDate = new Date(new Date().getTime());
  const actualHour = getCurrentTime().toString();


  const handleSubmit = async (e) => {
    e.preventDefault()

    const { out_hour, out_date, ...data } = form // eliminamos los campos in_hour y out_hour del form

    console.log("actualHour ", typeof actualHour)

    const timestampIn = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate(), actualHour.split(":")[0], actualHour.split(":")[1])
    const timestampOut = new Date(out_date.getFullYear(), out_date.getMonth(), out_date.getDate(), out_hour.split(":")[0], out_hour.split(":")[1])

    console.log("timestampIn ", timestampIn)
    console.log("timestampOut ", timestampOut)

    const tiempoEnMilisegundos = timestampOut- timestampIn
    const horasTotales = tiempoEnMilisegundos / (1000 * 60)
    const horasRedondeadas = Math.round(horasTotales)

    try {
      inAndOutsSchema.parse({ in_date, out_date, total: 0})
      const createManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').insert([{ 
            username: 'hec7orci7o', 
            in_date: timestampIn,
            out_date: timestampOut,
            total: horasRedondeadas
          }])
            .then(() => {
              setIsSheetOpen(true)
              console.log("in_date ", in_date)
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
    <Sheet>
      <SheetTrigger asChild>
        <Button id="new-date" variant="outline" className='capitalize'>{triggerBtn}</Button>
      </SheetTrigger>
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
              value={actualDate}
              placeholder={dictionary.inandouts['new-table-in-placeholder']}
            />

            <div className="w-[65px]">
              <Field.Text
                id="in_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                value = {actualHour}
              />
            </div>

            <SheetDescription style={{ marginTop: '20px' }}>
              {descriptionOut}
            </SheetDescription>

            <Field.DatePicker
              id="out_date"
              label={dictionary.inandouts['out-column']}
              value={form.out_date}
              placeholder={dictionary.inandouts['new-table-out-placeholder']}
              onChange={(e) => {
              
                if( form.in_date > e ) {
                  toast.error(dictionary.inandouts['error-out-date']);
                } else {
                  setter({ key: 'out_date', value: e })
                }
              }}
            />

            <div className="w-[65px]">
              <Field.Text
                id="out_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => {
                  const inputHour = e.target.value;
                  const inputElement = e.target;e.target.value 

                  if(  actualHour > inputHour ) {
                    toast.error("La hora de salida no puede ser menor que la hora de entrada");
                    setInvalidHour(false)
                  } else {
                    if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(inputHour)) {
                      inputElement.classList.remove('border-red-500');
                      setErrorOutHour(''); // Establece el mensaje de error como vacío
                      setter({ key: 'out_hour', value: inputHour });
                    } else {
                      setErrorOutHour('Formato de hora no válido'); // Establece el mensaje de error
                      inputElement.classList.add('border-red-500');
                    }
                  }
                  
                }}
              />
            </div>

            <SheetDescription>
              {errorOutHour && <p className="text-red-500">{errorOutHour}</p>} 
            </SheetDescription>
            

          </div>
          <SheetFooter className="">
            <SheetClose asChild >
              <Button type="submit" disabled={!form.out_date || !form.out_hour || !invalidHour}>
                {actionBtn}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

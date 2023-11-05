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


export function SidePanelEdit ({
  title,
  description,
  descriptionIn,
  descriptionOut,
  triggerBtn,
  actionBtn,
  fechaEntrada,
  fechaSalida
}) {

  const [errorOutHour, setErrorOutHour] = useState('');
  const [errorInHour, setErrorInHour] = useState('');
  const [invalidHour, setInvalidHour] = useState(true);

  const { dictionary } = useLang()
  const [form, setForm] = useState({ in_hour: '', out_hour: '', ...getForm(inAndOutsSchema._def.shape())}) // devuelve unos objetos

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const initialDate = new Date(fechaEntrada);
  const finalDate = new Date(fechaSalida);

  // Coger el valor de la hora de initialDate y finalDate en formeato HH:MM
  const initialHour = initialDate.getHours() + ':' + initialDate.getMinutes();
 // setter({ key: 'in_hour', value: initialHour });
  const finalHour = finalDate.getHours() + ':' + finalDate.getMinutes();


  const handleSubmit = async (e) => {
    e.preventDefault()

    const { in_hour, out_hour, in_date, out_date, ...data } = form // eliminamos los campos in_hour y out_hour del form

    const timestampIn = new Date(in_date.getFullYear(), in_date.getMonth(), in_date.getDate(), in_hour.split(":")[0], in_hour.split(":")[1])
    const timestampOut = new Date(out_date.getFullYear(), out_date.getMonth(), out_date.getDate(), out_hour.split(":")[0], out_hour.split(":")[1])

    const tiempoEnMilisegundos = timestampOut- timestampIn;
    const horasTotales = tiempoEnMilisegundos / (1000 * 60);
    const horasRedondeadas = Math.round(horasTotales);

    {/* mutate : actualiza la interfaz */}

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
      <SheetTrigger>{triggerBtn}</SheetTrigger>
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
              value={initialDate}
              placeholder={dictionary.inandouts['new-table-in-placeholder']}
              onChange={(e) => {
              
                if( form.out_date !== null && form.out_date < e ) {
                  toast.error(dictionary.inandouts['error-in-date']);
                } else {
                  setter({ key: 'in_date', value: e })
                }
              }}
            />

            <div className="w-[65px]">
              <Field.Text
                id="in_hour"
                value={form.in_hour }
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => {
                  const inputHour = e.target.value;

                  const inputElement = e.target;

                  if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(inputHour)) {
                    setErrorInHour(''); 
                    setter({ key: 'in_hour', value: inputHour });
                    inputElement.classList.remove('border-red-500');

                  } else {
                    setErrorInHour(dictionary.inandouts['error-hour']);
                    inputElement.classList.add('border-red-500');
                  }
                  
                }}
              />
            </div>

            <SheetDescription>
              {errorInHour && <p className="text-red-500">{errorInHour}</p>} 
            </SheetDescription>


            <SheetDescription style={{ marginTop: '20px' }}>
              {descriptionOut}
            </SheetDescription>

            <Field.DatePicker
              id="out_date"
              label={dictionary.inandouts['out-column']}
              value={finalDate}
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
                  value={finalHour}
                  onChange={(e) => {
                    const inputHour = e.target.value;
                    const inputElement = e.target;e.target.value 

                    if( form.in_date === form.out_date && form.in_hour > inputHour ) {
                      toast.error(dictionary.inandouts['error-out-hour']);
                      setInvalidHour(false)
                    } else {
                      if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(inputHour)) {
                        inputElement.classList.remove('border-red-500');
                        setErrorOutHour(''); 
                        setter({ key: 'out_hour', value: inputHour });
                      } else {
                        setErrorOutHour(dictionary.inandouts['error-hour']);
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

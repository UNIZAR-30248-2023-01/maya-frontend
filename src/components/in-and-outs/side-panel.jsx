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

export function SidePanel ({
  title,
  description,
  descriptionIn,
  descriptionOut,
  triggerBtn,
  actionBtn
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(inAndOutsSchema._def.shape()))



  // Funion que gestiona el setter de la fecha de salida y salida
  const gestionarSetter = async () => {
    console.log('form de gestionarSetter', form)

    const fechaOut = form.out_date.toLocaleDateString(dictionary.inandouts['lenguage'], { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    const fechaIn = form.in_date.toLocaleDateString(dictionary.inandouts['lenguage'], { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    const horaOut = form.out_hour;
    const horaIn = form.in_hour;

    console.log('fechas', fechaOut, fechaIn)
    
    if (fechaIn !== null && horaIn !== null && fechaOut !== null && horaOut !== null){ // añadir el out_date y out_hour
      console.log('creamos timestamp')
      const timestampIn =  new Date(createTimestamp(fechaIn, horaIn) )
      const timestampOut =  new Date(createTimestamp(fechaOut, horaOut) )

      //const { in_hour, out_hour, ...formWithoutHours} = form // eliminamos los campos in_hour y out_hour del form
      
      console.log('timestampIn', timestampIn)
      console.log('timestampOut', timestampOut)
      delete form.in_hour;
      delete form.out_hour;

      // DUDA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      form.in_date = timestampIn;
      form.out_date = timestampOut; 
      form.total = 20;
      
      setter({ key: 'in_date', value: timestampIn })
      setter({ key: 'out_date', value: timestampOut })
      setter({ key: 'total', value: 10 })

      console.log('form de gestionarSetter final ', form) 
    }
    
  }

  const setter = ({ key, value, type }) => {
    if (type === 'bool') {
      const { values } = inAndOutsSchema._def.shape()[key]._def.innerType._def
      return setForm({ ...form, [key]: values[Number(!value)] })
    }
    return setForm({ ...form, [key]: value })
  } 

  console.log('form llamado desde global ', form)


  const handleSubmit = async (e) => {
    e.preventDefault()

    await gestionarSetter();

    // Manjear los setter
    console.log('form de handleSubmit ', form)
    

    {/* mutate : actualiza la interfaz */}

    try {
      inAndOutsSchema.parse({ ...form})
      const createManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').insert([{ ...form , username: 'hec7orci7o' }])
            .then(() => {
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
              resolve()
              console.log('aquiiiiiiiiii', form)
            })
            .catch((error) => {reject(error); console.log('aquiiiiiiiiiinoooo', form)})
            
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

  // Funcion convierte la fecha y hora seleccionada en un timestamp
  function createTimestamp(dateToTimestamp, hourToTimestamp) {
  
    const [day, month, year] = dateToTimestamp.split('-');
    const [hour, minute] = hourToTimestamp.split(':');
    
    const combinedDate = new Date(year, month - 1, day, hour, minute);
    console.log('combinedDate ', combinedDate.getTime());

    return combinedDate.getTime(); // Devuelve el timestamp en milisegundos
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
              value={form.in_date}
              placeholder={dictionary.inandouts['new-table-in-placeholder']}
              onChange={(e) => {setter({ key: 'in_date', value: e });console.log('fecha de entrada ', e)}}
            />


            <div className="w-[65px]">
              <Field.Text
                id="in_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => {
                  const inputHour = e.target.value;

                  if (/^\d{2}:\d{2}$/.test(inputHour)) {
                    console.log('Formato de hora válido', inputHour);
                    setter({ key: 'in_hour', value: inputHour });


                  } else {
                    console.log('Formato de hora no válido');
                  }
                }}
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
              onChange={(e) => {setter({ key: 'out_date', value: e });console.log('fecha de salida ', e)}}
            />

            <div className="w-[65px]">
              <Field.Text
                id="out_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => {
                  const inputHour = e.target.value;

                  if (/^\d{2}:\d{2}$/.test(inputHour)) {
                    console.log('Formato de hora válido');
                    setter({ key: 'out_hour', value: inputHour });
                    
                  } else {
                    console.log('Formato de hora no válido');
                  }
                }}
              />
            </div>

          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button type="submit">
                {actionBtn}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

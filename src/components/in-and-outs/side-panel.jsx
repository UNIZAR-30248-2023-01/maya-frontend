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

  const setter = ({ key, value, type }) => {
    if (type === 'bool') {
      const { values } = inAndOutsSchema._def.shape()[key]._def.innerType._def
      return setForm({ ...form, [key]: values[Number(!value)] })
    }
    return setForm({ ...form, [key]: value })
  } 


  const handleSubmit = async (e) => {
    e.preventDefault()

    {/* mutate : actualiza la interfaz */}

    try {
      inAndOutsSchema.parse({ ...form})
      const createManualClockin = () => {
        return new Promise((resolve, reject) => {
          supabase.from('in-and-outs').insert([{ ...form }])
            .then(() => {
              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
              resolve()
              console.log('aquiiiiiiiiii', form)
            })
            .catch((error) => reject(error))
            console.log('aquiiiiiiiiiinoooo', form)
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

  const [selectedInDate, setselectedInDate] = useState(null);
  const [selectedInHour, setselectedInHour] = useState(null);

  const handleDateChange = (newDate) => {
    const fechaSeleccionada = newDate.toISOString().split('T')[0];
    console.log('fechaSeleccionada', fechaSeleccionada)
    setselectedInDate(fechaSeleccionada);

    if (selectedInDate !== null && selectedInHour !== null){
      const inFullDate= createTimestamp();
      setter({ key: 'in_date', value: inFullDate})
    }
  };

  const handleHourChange = (newHour) => {
    if (/^\d{2}:\d{2}$/.test(newHour)) {
      setselectedInHour(newHour);
      console.log('newHour', newHour)

      if (selectedInDate !== null && selectedInHour !== null){
        const inFullDate= createTimestamp();
        setter({ key: 'in_date', value: inFullDate})
      }
    } else {
      console.log('La hora no sigue el formato hh:mm');
    }
  };
  

  function createTimestamp() {
    const [year, month, day] = selectedInDate.split('-');
    const [hour, minute] = selectedInHour.split(':');
    
    const combinedDate = new Date(year, month - 1, day, hour, minute);
    console.log('combinedDate', combinedDate.getTime());

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
              placeholder={dictionary.inandouts['new-table-in-placeholder']}
              value={form.in_date}
              //onChange={(e) => console.log('e.target.value', e )}
              onChange={(e) => { console.log('e.target.value', e ), handleDateChange(e)}} 
               //onChange={(e) => {setter({ key: 'in_date', value: e.target.value }); console.log(e.target.value, 'e.target.value')}}
            />


            <div className="w-[65px]">
              <Field.Text
                id="in_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => { handleHourChange(e.target.value )}}
                //onChange={(e) => setter({ key: 'in_hour', value: e.target.value })}
              />
            </div>

            <SheetDescription style={{ marginTop: '20px' }}>
              {descriptionOut}
            </SheetDescription>
            
            <Field.DatePicker
              id="out_date"
              label={dictionary.inandouts['out-column']}
              placeholder={dictionary.inandouts['new-table-out-placeholder']}   
              onChange={(e) => { console.log('e.target.value', e ) /*handleDateChange(e)*/}}
            />

            <div className="w-[65px]"> 
              <Field.Text
                id="out_hour"
                placeholder={dictionary.inandouts['new-table-hour-placeholder']} 
                onChange={(e) => setter({ key: 'out_hour', value: e.target.value })}
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

'use client'

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

export function SidePanel ({
  title,
  description,
  triggerBtn,
  actionBtn
}) {
  const { dictionary } = useLang()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className='capitalize'>{triggerBtn}</Button>
      </SheetTrigger>
      <SheetContent className='min-w-[800px]'>
        <SheetHeader>
          <SheetTitle className='capitalize'>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        {
          //  Nombre
          //  Descripción
          //  Label
          //  Status
          //  Estimación
          //  Deadline
        }
        <div className='grid gap-4 py-4'>
          <Field.Text id={dictionary.projects['name-column']} label={dictionary.projects['name-column']} placeholder={''} onChange={''}/>
          <Field.TextArea id={dictionary.projects['description-column']} label={dictionary.projects['description-column']} placeholder={''} onChange={''}/>
          <Field.Bool id={''} label={''} checked={''} onChange={''}/>
        </div>
        <SheetFooter className=''>
          <SheetClose asChild>
            <Button
              type='submit'
            >
              {actionBtn}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

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
import { Text, TextArea, Number, ComboboxEnum, DatePicker } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { Label } from '@/components/ui/label'
import { normalize } from '@/lib/utils'

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
        <Button variant='outline' className='capitalize'>
          {triggerBtn}
        </Button>
      </SheetTrigger>
      <SheetContent className='min-w-[600px]'>
        <SheetHeader>
          <SheetTitle className='capitalize'>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className='flex flex-col justify-between h-full'>
          <div className='grid gap-4 py-4'>
            <Text
              id={dictionary.tasks['name-column']}
              label={dictionary.tasks['name-column']}
              placeholder={dictionary.tasks['new-task-name-placeholder']}
              onChange={''}
            />
            <TextArea
              id={dictionary.tasks['description-column']}
              label={dictionary.tasks['description-column']}
              placeholder={dictionary.tasks['new-task-description-placeholder']}
              onChange={''}
            />
            <Number
              min={0}
              id={dictionary.tasks['estimated-column']}
              label={dictionary.tasks['estimated-column']}
              placeholder={dictionary.tasks['new-task-estimated-placeholder']}
              onChange={''}
            />
            <div className='flex flex-col gap-1.5 w-full'>
                  <Label className='capitalize'>{normalize(dictionary.tasks['end-date-column'])}</Label>
                  <DatePicker />
              </div>

            <div className='flex justify-between gap-4'>
              <div className='flex flex-col gap-1.5 w-full'>
                  <Label className='capitalize'>{normalize(dictionary.tasks['status-column'])}</Label>

                  <ComboboxEnum
                    id={dictionary.tasks['status-column']}
                    label={dictionary.tasks['new-task-status-placeholder']}
                    list={
                      tasksStatuses.map((el) => {
                        return {
                          label:
                            (<div className='flex gap-2'>
                              {el.icon && <span>{el.icon}</span>}
                              <span className='capitalize'>{dictionary.tasks[el.value]}</span>
                            </div>),
                          value: el.value
                        }
                      })}
                    />
              </div>

              <div className='flex flex-col gap-1.5 w-full'>
                  <Label className='capitalize'>{normalize(dictionary.tasks['label-column'])}</Label>

                  <ComboboxEnum
                    id={dictionary.tasks['label-column']}
                    label={dictionary.tasks['new-task-label-placeholder']}
                    list={
                      tasksLabels.map((el) => {
                        return {
                          label: dictionary.tasks[el.value],
                          value: el.value
                        }
                      })}
                  />
              </div>
            </div>
          </div>
          <SheetFooter className='pb-12'>
            <SheetClose asChild>
              <Button type='submit'>{actionBtn}</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

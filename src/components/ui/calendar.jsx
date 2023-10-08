'use client'
import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function Calendar ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-9', className)} // Redimensionamos el padding
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-12 sm:space-x-12 sm:space-y-0', // Redimensionamos los espacios
        month: 'space-y-12', // Redimensionamos el espacio
        caption: 'flex justify-center pt-3 relative items-center', // Redimensionamos el padding
        caption_label: 'text-lg font-medium', // Redimensionamos el tamaño de la fuente
        nav: 'space-x-3 flex items-center', // Redimensionamos los espacios
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-21 w-21 bg-transparent p-0 opacity-50 hover:opacity-100' // Redimensionamos el tamaño
        ),
        nav_button_previous: 'absolute left-3', // Redimensionamos la posición
        nav_button_next: 'absolute right-3', // Redimensionamos la posición
        table: 'w-full border-collapse space-y-3', // Redimensionamos los espacios
        head_row: 'flex', // Redimensionamos el espacio
        head_cell:
          'text-muted-foreground rounded-md w-24 font-normal text-lg', // Redimensionamos el tamaño de la fuente
        row: 'flex w-full mt-6', // Redimensionamos el espacio
        cell: cn(
          'relative p-0 text-center text-lg focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-24 w-24 p-0 font-normal aria-selected:opacity-100' // Redimensionamos el tamaño
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-12 w-12" />, // Redimensionamos el tamaño
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-12 w-12" /> // Redimensionamos el tamaño
      }}
      {...props} />)
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }

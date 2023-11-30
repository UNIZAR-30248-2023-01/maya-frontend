'use client'

import { useState } from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { Label } from '@/components/ui/label'
import { normalize, cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

export function ComboboxEnum ({ id, label, value, list, dictionary, searchDictionary, onChange }) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className='flex flex-col gap-1.5 w-full'>
        <Label className='capitalize'>{normalize(label)}</Label>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn('w-full justify-between capitalize', !value && 'text-muted-foreground font-normal')}
          >
            <div className='flex flex-row gap-2'>
              {<span>{list.find(e => e.value === value)?.icon}</span>}
              {dictionary[value] || label}
            </div>

            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder={searchDictionary['search-placeholder']} className="h-9" />
          <CommandEmpty>{searchDictionary['not-found']}</CommandEmpty>
          <CommandGroup>
            {list.map((item) => (
              <CommandItem
                id={item.value}
                key={item.value}
                onSelect={() => {
                  onChange(item.value)
                  setOpen(false)
                }}
                className='capitalize flex flex-row gap-2'
              >
                {item.icon && <span>{item.icon}</span>}
                {dictionary[item.value]}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function ComboboxArray ({ id, label, placeholder, values, list, onChange, dictionary }) {
  const [open, setOpen] = useState(false)
  return (
    <Popover className='w-full' open={open} onOpenChange={setOpen} >
      <div className='flex flex-col gap-1.5 w-full'>
        <Label className='capitalize'>{normalize(label)}</Label>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn('w-full justify-between', values.length === 0 && 'text-muted-foreground font-normal')}
          >
            {values.length > 0
              ? values.join(', ')
              : placeholder}
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{dictionary.table['no-results']}</CommandEmpty>
            <CommandGroup id={`${id}-menu`}>
              {list.map((option) => {
                const isSelected = values.includes(option.value)
                return (
                  <CommandItem
                    id={option.value}
                    key={option.value}
                    onSelect={(e) => {
                      onChange(e)
                      setOpen(false)
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    <span className='capitalize'>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

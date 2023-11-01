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

export function ComboboxEnum ({ id, label, value, list, onChange, dictionary }) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label className='capitalize'>{normalize(label)}</Label>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between capitalize"
        >
          {value || label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${label}...`} className="h-9" />
          <CommandEmpty>No {label} found.</CommandEmpty>
          <CommandGroup id={`${id}-menu`}>
            {list.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(e) => {
                  onChange(e)
                  setOpen(false)
                }}
                className='capitalize'
              >
                {dictionary[item.value]}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === dictionary[item.value] ? 'opacity-100' : 'opacity-0'
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

export function ComboboxArray ({ id, label, values, list, onChange }) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
        <Label className='capitalize'>{normalize(label)}</Label>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {values.length > 0
              ? values.join(', ')
              : label}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={id} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup id={`${id}-menu`}>
              {list.map((option) => {
                const isSelected = values.includes(option.value)
                return (
                  <CommandItem
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

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '../ui/separator'
import { Label } from '../ui/label'
import Link from 'next/link'
import { normalize } from '@/lib/utils'
import { LuChevronDown } from 'react-icons/lu'

export function SidebarHeader ({ organization, restOrg }) {
  return (
    <div className="flex flex-row-reverse justify-between items-center gap-3">
{/*      <DropdownMenu>
        <DropdownMenuTrigger className=" hover:text-indigo-600 flex justify-between items-center w-full rounded-md border-0 text-gray-400 shadow-sm ring-1 focus:shadow-sm sm:text-sm sm:leading-6 px-2 py-1 focus:ring-gray-300 ring-gray-300">{organization}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {restOrg?.map(e => (
            <DropdownMenuItem key={e.organization} id={e.organization}>{e.organization}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
*/}
      <Popover>
        <PopoverTrigger className="flex flex-row justify-between items-center bg-custom-lightYellow w-full rounded-md border-0 text-gray-700 text-sm leading-6 p-2">
          <p id={organization} className="text-sm leading-6 font-medium first-letter:uppercase">{organization}</p>
          <LuChevronDown />
        </PopoverTrigger>
        <PopoverContent className="mx-6 w-60">
          <div className="w-full flex items-center justify-between px-2 py-1.5" href='/organizations'>
            <Label className="text-center font-bold w-full">Your organizations</Label>
          </div>
          <Separator className="my-1"/>
          {restOrg?.map(e => (
            <Link key={e.organization} id={e.organization} href={'/' + e.organization + '/home'}>
              <p className="first-letter:uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-custom-mustard rounded-sm">{normalize(e.organization)}</p>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

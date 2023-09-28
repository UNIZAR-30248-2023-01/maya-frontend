import { SheetClose } from '../ui/sheet'
import { Button } from '@/components/ui/button'
import { LuPanelLeft } from 'react-icons/lu'

export function SidebarHeader ({ collapsable = false, setOpenSearchCommand }) {
  return (
    <div className="flex h-16 justify-between items-center gap-1.5">
      <Button variant="outline" onClick={ () => setOpenSearchCommand((open) => !open) } className=" hover:text-indigo-600 flex justify-between items-center w-full rounded-md border-0 text-gray-400
      shadow-sm ring-1 focus:shadow-sm sm:text-sm sm:leading-6 px-2 py-1 focus:ring-gray-300 ring-gray-300">
        <p>Search...</p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      {collapsable &&
        <SheetClose asChild>
          <Button variant="ghost" size="icon" className="hover:text-indigo-600 group">
            <span className="sr-only">Close sidebar</span>
            <LuPanelLeft className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" />
          </Button>
        </SheetClose>
        }
    </div>
  )
}

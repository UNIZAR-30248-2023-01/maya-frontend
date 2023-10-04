export function SidebarHeader ({ setOpenSearchCommand }) {
  return (
    <div className="flex flex-row-reverse justify-between items-center gap-3">
      <Button
        variant="outline"
        onClick={ () => setOpenSearchCommand((open) => !open) }
        className=" hover:text-indigo-600 flex justify-between items-center w-full rounded-md border-0 text-gray-400 shadow-sm ring-1 focus:shadow-sm sm:text-sm sm:leading-6 px-2 py-1 focus:ring-gray-300 ring-gray-300"
      >
        <p>Search...</p>
        <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span><span className="text-sm">K</span>
        </kbd>
      </Button>
    </div>
  )
}
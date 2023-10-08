import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '@/components/ui/table/projects/data-table-view-options'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const dict = {
  en: {
    filter: 'Project name...',
    archive: 'Show archived'
  },
  es: {
    filter: 'Nombre del proyecto...',
    archive: 'Mostrar archivados'
  }
}

export function DataTableToolbar ({
  table,
  lang
}) {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={dict[lang].filter}
          value={(table.getColumn('name')?.getFilterValue()) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="archived">{dict[lang].archive}</Label>
        <Switch id="archived" />
      </div>
      <DataTableViewOptions table={table} lang={lang} />
    </div>
  )
}

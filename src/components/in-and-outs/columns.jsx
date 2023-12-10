'use client'

import { DataTableColumnHeader } from '@/components/in-and-outs/data-table-column-header'
import { Skeleton } from '@/components/ui/skeleton'
import { SidePanelEdit } from '@/components/in-and-outs/side-panel-edit'

// Funcion para formatear la fecha
function formatDate (timestamp, language) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }

  if (!timestamp) return null

  return new Date(timestamp).toLocaleDateString(language, options)
}

// Funcion para formatear el tiempo total siendo el parametro de entrada un int4

function formatTime (total) {
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  return `${hours}h ${minutes}m`
}

/* Fichero encargador de nombrar las columnas */
export const columns = [
  {
    accessorKey: 'in_date',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['in-column']} />
    ),
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) {
        return (
          <div classid="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {formatDate(row.getValue('in_date'), dictionary.language)}
          </span>
        </div>

      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'out_date',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['out-column']} />
    ),
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) {
        return (
          <div className="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {formatDate(row.getValue('out_date'), dictionary.language)}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'total',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['total-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      if (!id) {
        return (
          <div className="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {formatTime(row.getValue('total'))}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }, {
    id: 'actions',
    cell: ({ row, dictionary }) => {
      return <SidePanelEdit
                title={dictionary.edit}
                description={dictionary['new-table-description']} // Descripcion del panel
                descriptionIn={dictionary['new-table-description-in']}
                descriptionOut={dictionary['new-table-description-out']}
                actionBtn={dictionary.edit}
                fechaEntrada={row.original.in_date}
                fechaSalida={row.original.out_date}
                deleteBtn={dictionary.delete}
              organization={row.original.organization}
              />
    }
  }
]

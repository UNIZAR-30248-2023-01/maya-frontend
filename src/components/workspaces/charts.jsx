import { DataTable } from '@/components/workspaces/data-table-chart'
import { columns } from '@/components/workspaces/columns'
import { conectSeatsio } from '@/lib/seatsioUtils'
import { ChartListParams } from 'seatsio'
import { supabase } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

function SpaceList (name) {
  const [spacesData, setSpacesData] = useState(null)

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const { data: workspace, error } = await supabase
          .from('workspaces')
          .select('*')
          .eq('name', name.name)

        if (error) {
          console.error('Error fetching workspace:', error)
          return
        }

        const chartsData = await conectSeatsio.charts.listFirstPage(new ChartListParams().withExpandEvents(true))

        // Modifica los datos según tus necesidades
        const modifiedSpacesData = chartsData.items.map(element => {
          return {
            ...element,
            secretKey: element.events[0].key,
            key: workspace[0].key
          }
        })

        setSpacesData(modifiedSpacesData)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchSpaces()
  }, [name.name])

  return (
    <div>
      {spacesData ? <DataTable data={spacesData} columns={columns} /> : <p>Cargando...</p>}
    </div>
  )
}

export { SpaceList }

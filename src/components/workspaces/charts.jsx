import { DataTable } from '@/components/workspaces/data-table-chart'
import { columns } from '@/components/workspaces/columns'
import { fetchWorkSpacesCharts } from '@/lib/seatsioUtils'
import { supabase } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export function SpaceList (name) {
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

        // const chartsData = await conectSeatsio.charts.listFirstPage(new ChartListParams().withExpandEvents(true))
        const chartsData = await fetchWorkSpacesCharts(workspace[0].secretKey)
        // Modifica los datos según tus necesidades
        const modifiedSpacesData = chartsData.map(element => {
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

  return (<DataTable data={spacesData || []} columns={columns} />)
}

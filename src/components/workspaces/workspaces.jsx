// import { SeatsioClient, Region } from 'seatsio'
import { DataTable } from '@/components/workspaces/data-table'
import { columns } from '@/components/workspaces/columns'
import { conectSeatsio } from '@/lib/seatsioUtils'
import React, { useEffect, useState } from 'react'

function WorkspaceList () {
  const [workspacesData, setWorkspaceData] = useState(null)

  useEffect(() => {
    const fetchWorkSpaces = async () => {
      try {
        await conectSeatsio.workspaces.listFirstPage()
          .then(data => {
            console.log('data:', data)
            setWorkspaceData(data.items) // Almacena los datos en la variable workspacesData
            // workspacesData = data // Almacena los datos en la variable workspacesData
          })
          .catch(error => {
            console.error('Error fetching workspace:', error)
          })
        console.log('WORKESPACES:', workspacesData)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchWorkSpaces()
  }, [])

  return (
    <div>
      {workspacesData ? <DataTable data={workspacesData} columns={columns} /> : <p>Cargando...</p>}
    </div>
  )
}

export { WorkspaceList }

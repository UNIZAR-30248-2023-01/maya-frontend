import { DataTable } from '@/components/workspaces/data-table'
import { columns } from '@/components/workspaces/columns'
import { fetchWorkSpaces } from '@/lib/seatsioUtils'
import React, { useEffect, useState } from 'react'

function WorkspaceList () {
  const [workspacesData, setWorkspacesData] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      const workspaces = await fetchWorkSpaces()
      setWorkspacesData(workspaces)
      console.log('WORKESPACES:', workspacesData)
    }

    fetch()
  }, [])

  return (
    <div>
      {workspacesData ? <DataTable data={workspacesData} columns={columns} /> : <p>Cargando...</p>}
    </div>
  )
}

export { WorkspaceList }

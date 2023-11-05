// import { SeatsioClient, Region } from 'seatsio'
import { DataTable } from '@/components/workspaces/data-table'
import { columns } from '@/components/workspaces/columns'
import { conectSeatsio } from '@/lib/seatsioUtils'

// const companyAdminKey = 'f123fe61-ed6c-42f6-8192-d915f5ba6155' process.env.COMPANY_ADMIN_KEY

function WorkspaceList () {
  // const client = new SeatsioClient(Region.EU(), process.env.COMPANY_ADMIN_KEY)

  let workspacesData = {}
  const renderWorkspaces = async () => {
    await conectSeatsio.workspaces.listFirstPage()
      .then(data => {
        console.log('data:', data)
        workspacesData = data // Almacena los datos en la variable workspacesData
      })
      .catch(error => {
        console.error('Error:', error)
      })
    console.log('WORKESPACES:', workspacesData.items)
    return <DataTable data={workspacesData.items} columns={columns}/>
  }
  return (
    <div>
      {renderWorkspaces()}
    </div>
  )
}

export { WorkspaceList }

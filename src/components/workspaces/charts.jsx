import { DataTable } from '@/components/workspaces/data-table-chart'
import { columns } from '@/components/workspaces/columns'
import { conectSeatsio } from '@/lib/seatsioUtils'
import { ChartListParams } from 'seatsio'
import { supabase } from '@/lib/utils'

// const companyAdminKey = 'f123fe61-ed6c-42f6-8192-d915f5ba6155'
// secretkey es la key del evento
// key es la key del chart que vamos a cambiarla a la del workspace
function SpaceList (name) {
  // const client = new SeatsioClient(Region.EU(), 'f123fe61-ed6c-42f6-8192-d915f5ba6155')

  console.log('workspaceName EN CHARTS:', name.name)
  let spacesData = {}
  const renderSpaces = async () => {
    const { data: workspace, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('name', name.name)
    if (error) console.log('error:', error)
    if (workspace) {
      console.log('WORKSPACE EN SPACE:', workspace)
    }

    // await conectSeatsio.charts.listFirstPage()
    await conectSeatsio.charts.listFirstPage(new ChartListParams().withExpandEvents(true))
      .then(data => {
        console.log('data:', data)
        spacesData = data // Almacena los datos en la variable workspacesData
      })
      .catch(error => {
        console.error('Error:', error)
      })
    console.log('charts:', spacesData.items)
    console.log('chart:', spacesData)
    console.log('event Secret Key:', spacesData.items[0].events[0].key)
    for (const element of spacesData.items) {
      element.secretKey = element.events[0].key
      element.key = workspace[0].key
    }
    console.log('spacesData.items:', spacesData.items)
    return <DataTable data={spacesData.items} columns={columns}/>
  }
  return (
    <div>
      {renderSpaces()}
    </div>
  )
}

export { SpaceList }

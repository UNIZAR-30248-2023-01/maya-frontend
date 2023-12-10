import { DataTable } from '@/components/workspaces/data-table'
import { columns } from '@/components/workspaces/columns'
import useSWR from 'swr'

export function WorkspaceList ({ organization }) {
  const { data: workspaces } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/workspaces?organization=eq.${organization}&evento=eq.${'FALSE'}&select=*`)

  /* const [workspacesData, setWorkspacesData] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      const workspaces = await fetchWorkSpaces()
      setWorkspacesData(workspaces)
      console.log('WORKESPACES:', workspacesData)
    }

    fetch()
  }, [])
*/
  return (
      <div>
        <DataTable data={workspaces || []} columns={columns} />
      </div>
  )
}

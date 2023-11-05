'use client'

import { WorkspaceList } from '@/components/workspaces/workspaces'

// import { DataTable } from '@/components/workspaces/data-table'
// import { columns } from '@/components/workspaces/columns'
// import { loadingTeam } from '@/lib/constants'
// import useSWR from 'swr'

export default function WorkspacesList () {
  // const { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,people(*)`)
  // const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)
  // const spaces =  WorkspaceList
  // console.log(spaces)
  return (
    <>
      <WorkspaceList/> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
  // return <DataTable data={spaces.name} columns={columns}/>
}

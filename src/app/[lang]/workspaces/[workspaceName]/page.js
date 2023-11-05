'use client'

import { SpaceList } from '@/components/workspaces/charts'

// import { DataTable } from '@/components/workspaces/data-table'
// import { columns } from '@/components/workspaces/columns'
// import { loadingTeam } from '@/lib/constants'
// import useSWR from 'swr'
// Estamos dentro de un WorkSpace, es decir un edificio o campus por ejemplo
// Vamos a listar todos los espacios que hay dentro de este WorkSpace

export default function SpacesList ({ params }) {
  const { workspaceName } = params
  console.log('NOMBRE EN PAGE :', workspaceName)
  return (
    <>
      <SpaceList name={workspaceName} /> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
  // return <DataTable data={spaces.name} columns={columns}/>
}

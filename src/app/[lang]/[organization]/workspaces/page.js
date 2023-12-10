'use client'

import { WorkspaceList } from '@/components/workspaces/workspaces'

export default function WorkspacesList ({ params }) {
  return (
    <>
      <WorkspaceList organization={params.organization} /> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
}

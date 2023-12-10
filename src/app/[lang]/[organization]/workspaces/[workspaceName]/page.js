'use client'

import { SpaceList } from '@/components/workspaces/charts'

export default function SpacesList ({ params }) {
  const { workspaceName } = params
  return (
    <>
      <SpaceList name={workspaceName} /> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
}

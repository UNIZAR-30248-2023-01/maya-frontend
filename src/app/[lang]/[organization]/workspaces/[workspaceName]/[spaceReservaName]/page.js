'use client'
import MySeatingChart from '@/components/workspaces/seating'

export default function ReservationPage ({ params }) {
  const { spaceReservaName } = params
  return (
    <>
      <MySeatingChart name={spaceReservaName}/> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
}

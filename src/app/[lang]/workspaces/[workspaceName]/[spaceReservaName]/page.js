'use client'
// import { SeatsioSeatingChart } from '@seatsio/seatsio-react'
import MySeatingChart from '@/components/workspaces/seating'
// import { useState } from 'react'

export default function ReservationPage ({ params }) {
  // Ahora puedes utilizar value1 y value2 en esta página
  const { spaceReservaName } = params

  return (
    <>
      <MySeatingChart name={spaceReservaName}/> {/* Renderiza el componente MySeatingChart aquí */}
    </>
  )
}

// Esto va
// export default function WorkspacesPage () {
//   return (
//     <>
//       <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
//       <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-1/2 p-4'>
//           <SeatsioSeatingChart
//             workspaceKey="545ec209-b1a2-4477-8ec2-47aeb69c1dba"
//             event="115b9d7a-4d67-4729-b759-d0d51709b125"
//             region="eu"
//           />
//       </div>
//     </>
//   )
// }

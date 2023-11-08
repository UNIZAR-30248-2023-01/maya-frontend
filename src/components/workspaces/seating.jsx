'use client'
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'
// import { SeatsioClient, Region } from 'seatsio'
import { supabase } from '@/lib/utils'
import { conectSeatsio } from '@/lib/seatsioUtils'

// import { useLang } from '@/context/language-context'
import React, { useRef, useState, useEffect } from 'react'
// import { set } from 'cypress/types/lodash'   "545ec209-b1a2-4477-8ec2-47aeb69c1dba"

// const eventKey = '115b9d7a-4d67-4729-b759-d0d51709b125'
const user = 'user1'
function MySeatingChart (name) {
  // const { dictionary } = useLang()

  const seatingChartRef = useRef(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [reservations, setReservations] = useState([])
  const [hasReservation, setHasReservation] = useState(false)
  const [Workspace, setWorkspace] = useState('')
  const [event, setEvent] = useState('')
  // const client = new SeatsioClient(Region.EU(), 'c537f060-cdde-4539-b528-b8290629c0e0')

  console.log('name EN SEATING:', name.name)

  const obtenerWorkspace = async () => {
    const { data: workspace, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('name', name.name)
    if (error) console.log('error:', error)
    if (workspace) {
      console.log('WORKSPACE EN SPACE:', workspace)
      console.log('*******************************************************************')
      console.log('workspace key:', workspace[0].key)
      console.log('event secret key:', workspace[0].secretKey)
      setWorkspace(workspace[0].key)
      setEvent(workspace[0].secretKey)
    }
  }
  // Llamar a la función para obtener el workspace antes del renderizado

  // Esto es para guardar los asientos SELECCIONADOS
  const handleSeatSelect = (selectedObject) => {
    setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, selectedObject.id])
  }

  // Esto es para actualizar los asientos en el caso de que DES-SELECCIONEN alguno
  const handleSeatDeSelect = (selectedObject) => {
    setSelectedSeats((prevSelectedSeats) => prevSelectedSeats.filter(seat => seat !== selectedObject.id))
  }

  // Para guardar los asientos seleccionados en la base de datos y en seatsio
  const handleSaveSeats = async () => {
    await conectSeatsio.events.book(event, selectedSeats)
    const timeBooked = new Date().toISOString().slice(0, 10)
    console.log(timeBooked)

    for (const element of selectedSeats) {
      const seatId = element
      const userId = user
      const { error } = await supabase.from('reservations').insert([{
        seatId,
        userId,
        timeBooked,
        event
      }])
      if (error) console.log('error:', error)
    }

    const { data: workspaces, error } = await supabase
      .from('reservations')
      .select('*')
      .eq('userId', user) // Reemplaza 'usuario1' con el ID del usuario actual
      .eq('timeBooked', timeBooked)
      .eq('event', event)

    if (error) console.log('error:', error)
    if (workspaces) {
      setHasReservation(true)
    }
    console.log('workspaces:', workspaces)
  }

  // Para cancelar la reserva de los asientos RESERVADOS en seatsio
  // const handleSeatsBooked = async () => {
  //   if (hasReservation) {
  //     reservations.forEach(async (reservation) => {
  //       await client.events.release(eventKey, reservation.seatId)
  //     })
  //   }
  //   // await client.events.release(eventKey, selectedSeats)
  // }
  const renderSelectedSeats = () => {
    return selectedSeats.map((seat, index) => (
      <div key={index}>{`Número ${seat}`}</div>
    ))
  }

  const renderReservationsSeats = () => {
    console.log('reservations:', reservations)
    return reservations.map((seat, index) => (
      // <tr key={index}>
      //   <td>Número {seat.seatId}</td>
      // </tr>
      <div key={index}>{`Número ${seat.seatId}`}</div>
    ))
  }

  // useEffect(async () => {
  //   await obtenerWorkspace()
  // }, [])

  // Para verificar si el usuario actual tiene una reserva
  useEffect(() => {
    const checkReservation = async () => {
      // await obtenerWorkspace()
      const timeBooked = new Date().toISOString().slice(0, 10)
      console.log(timeBooked)
      console.log('event checkReseervation:', event)
      const { data: seatsReserved, error } = await supabase
        .from('reservations')
        .select('*')
        .eq('userId', user) // Reemplaza 'usuario1' con el ID del usuario actual
        .eq('timeBooked', timeBooked)
        .eq('event', event)

      if (error) {
        console.log('error:', error)
      } else {
        console.log('reservas', seatsReserved)
        console.log('ASIEENTOS RESERVAS', seatsReserved.length)
        if (seatsReserved && seatsReserved.length > 0) {
          setReservations(seatsReserved)
          setHasReservation(true)
        }
      }
    }
    checkReservation()
  }, [Workspace, event, hasReservation])

  useEffect(() => {
    const ejecutar = async () => {
      try {
        // await obtenerWorkspace()
        await obtenerWorkspace()
        // Ambas funciones se han completado
      } catch (error) {
        // Manejar errores si es necesario
      }
    }
    ejecutar()
  }, [])
  // useEffect(() => {
  //   console.log('--------------------------------------------------------')
  //   console.log('workspace:', Workspace)
  //   console.log('event:', event)
  // }, [Workspace])

  const handleCancelReservation = async () => {
    if (hasReservation) {
      reservations.forEach(async (reservation) => {
        await conectSeatsio.events.release(event, reservation.seatId)
      })
    }
    const timeBooked = new Date().toISOString().slice(0, 10)
    console.log(timeBooked)

    for (const element of reservations) {
      const seatId = element.seatId
      const userId = 'user1'
      const { error } = await supabase
        .from('reservations')
        .delete()
        .eq('seatId', seatId)
        .eq('userId', userId)
        .eq('timeBooked', timeBooked)
        .eq('event', event)
      if (error) console.log('error:', error)
    }

    setHasReservation(false)
    setReservations([])
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className='rounded-md border min-h-full flex items-center justify-start h-96 w-2/3 p-4' style={{ margin: '10px' }}>
        <SeatsioSeatingChart
          workspaceKey={Workspace}
          event={event}
          region="eu"
          language='es'
          ref={seatingChartRef}
          onObjectSelected={handleSeatSelect}
          onObjectDeselected={handleSeatDeSelect}
          maxSelectedObjects={1}
        />
      </div>
      <div className='rounded-md border min-h-full flex items-center justify-start h-96 w-1/3 p-4' style={{ margin: '10px' }}>
        <div>
          {hasReservation && (
            <div id="selected-seats-container">
              <h1 style={{ fontSize: '1rem', fontWeight: '600', color: '#47433E' }}>Asientos Reservados</h1>
              {renderReservationsSeats()}
            </div>
          )}
          {!hasReservation && (
            <div id="selected-seats-container">
              <h1 style={{ fontSize: '1rem', fontWeight: '600', color: '#47433E' }}>Asientos Seleccionados</h1>
              {renderSelectedSeats()}
            </div>
          )}
          <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-9 px-4 py-2" type="submit" onClick={handleSaveSeats}>Guardar</button>
            {hasReservation && (
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-9 px-4 py-2" type="submit" onClick={handleCancelReservation}>Cancelar Reserva</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // <>
  //   {/* <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/> */}
  //   <div style={{ display: 'flex' }}>
  //     <div className='rounded-md border min-h-full flex items-center justify-start h-96 w-1/2 p-4' style={{ margin: '10px' }}>
  //       <SeatsioSeatingChart
  //         workspaceKey={Workspace}
  //         event={event}
  //         region="eu"
  //         language='es'
  //         ref={seatingChartRef}
  //         onObjectSelected={handleSeatSelect}
  //         onObjectDeselected={handleSeatDeSelect}
  //         maxSelectedObjects={1}
  //       />
  //     </div>
  //     <div className='rounded-md border min-h-full flex items-center justify-start h-96 w-1/2 p-4' style={{ margin: '10px' }}>
  //         <div>
  //         {hasReservation && (
  //         <div id="selected-seats-container">
  //           <div><h1>Asientos Reservados</h1></div>
  //           {renderReservationsSeats()}
  //         </div>)}
  //         {!hasReservation && (
  //         <div id="selected-seats-container">
  //           <div><h1>Asientos Seleccionados</h1></div>
  //           {renderSelectedSeats()}
  //         </div>)
  //         }
  //         </div>
  //         <div class="fixed top-70 right-15">
  //           <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
  //             <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-9 px-4 py-2" type="submit" onClick={handleSaveSeats}>Guardar</button></div>
  //           </div>
  //         </div>
  //         {hasReservation && (
  //           <div class="fixed bottom-96 right-15">
  //             <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
  //               <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-9 px-4 py-2" type="submit" onClick={handleCancelReservation}>Cancelar Reserva</button>
  //             </div>
  //           </div>
  //         )}
  //     </div>
  //     </>
}

export default MySeatingChart

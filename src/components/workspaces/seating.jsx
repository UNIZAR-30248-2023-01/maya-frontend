'use client'
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'
import { supabase } from '@/lib/utils'
import { conectSeatsio } from '@/lib/seatsioUtils'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'
import React, { useRef, useState, useEffect } from 'react'
import { useUser } from '@/context/user-context'

function MySeatingChart (name) {
  const seatingChartRef = useRef(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [reservations, setReservations] = useState([])
  const [hasReservation, setHasReservation] = useState(false)
  const [Workspace, setWorkspace] = useState('')
  const [event, setEvent] = useState('')
  const [hasEvent, setHasEvent] = useState(false)
  const [liberar, setLiberar] = useState(false)
  const { lang, dictionary } = useLang()
  const { user } = useUser()

  const lanNumber = dictionary.workspaces.number
  const lanReservedSeats = dictionary.workspaces.reservedSeats
  const lanSelectedSeats = dictionary.workspaces.selectedSeats
  const lanSave = dictionary.workspaces.save
  const lanCancel = dictionary.workspaces.cancel
  const username = user?.username

  // Obtiene la key del workspace y el secret key del evento
  const obtenerWorkspace = async () => {
    const { data: workspace, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('name', name.name)
    if (error) console.log('error:', error)
    if (workspace) {
      // console.log('workspace key:', workspace[0].key)
      // console.log('event secret key:', workspace[0].secretKey)
      setWorkspace(workspace[0].key)
      setEvent(workspace[0].secretKey)
      setHasEvent(true)
    }
  }

  const liberarReservas = async () => {
    const { data: reservas, error } = await supabase
      .from('reservations')
      .select('*')
    if (error) console.log('error:', error)

    const oneDayAgo = new Date()
    // fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5)
    oneDayAgo.setHours(oneDayAgo.getHours() - 24)

    console.log('Reservas :', reservas)
    // console.log('ONE DAY AGO:', oneDayAgo.toISOString())

    const reservasFiltradas = reservas.filter(reserva => {
      const dateObject = new Date(reserva.timeBooked)
      const timestamp = dateObject.getTime()
      return timestamp < oneDayAgo.getTime()
    })

    console.log('Reservas filtradas:', reservasFiltradas)
    reservasFiltradas.forEach(async (res) => {
      try {
        await conectSeatsio.events.release(event, res.seatId)
        await supabase
          .from('reservations')
          .delete()
          .eq('seatId', res.seatId)
          .eq('userId', res.userId)
          .eq('event', event)
      } catch (error) {
        // Manejar la excepción aquí
        console.error(`Error al liberar el asiento ${res.seatId}: ${error.message}`)
      }
    })

    setLiberar(true)
  }

  // Guarda los asientos SELECCIONADOS
  const handleSeatSelect = (selectedObject) => {
    setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, selectedObject.id])
  }

  // Actualiza los asientos en el caso de que DES-SELECCIONEN alguno
  const handleSeatDeSelect = (selectedObject) => {
    setSelectedSeats((prevSelectedSeats) => prevSelectedSeats.filter(seat => seat !== selectedObject.id))
  }

  // Para guardar los asientos seleccionados en la base de datos y en seatsio
  const handleSaveSeats = async () => {
    try {
      const saveSeats = () => {
        return new Promise((resolve, reject) => {
          if (selectedSeats.length > 0) {
            conectSeatsio.events.book(event, selectedSeats)
          }
          const timeBooked = new Date().toISOString()
          console.log(timeBooked)

          for (const element of selectedSeats) {
            const seatId = element
            const userId = username
            supabase.from('reservations').insert([{
              seatId,
              userId,
              timeBooked,
              event
            }])
              .then(() => {
                resolve()
              })
              .catch((error) => {
                reject(error)
              })
          }

          supabase
            .from('reservations')
            .select('*')
            .eq('userId', username)
            .eq('event', event)
            .then(() => {
              setHasReservation(true)
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        })
      }
      toast.promise(saveSeats, {
        loading: dictionary.workspaces['toast-res-loading'],
        success: () => dictionary.workspaces['toast-res-success'],
        error: () => dictionary.workspaces['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  // Muestra los asientos seleccionados
  const renderSelectedSeats = () => {
    return selectedSeats.map((seat, index) => (
      <div key={index}>{`${lanNumber} ${seat}`}</div>
    ))
  }

  // Muestra los asientos reservados
  const renderReservationsSeats = () => {
    console.log('reservations:', reservations)
    return reservations.map((seat, index) => (
      <div key={index}>{`${lanNumber} ${seat.seatId}`}</div>
    ))
  }

  // Para verificar si el usuario actual tiene una reserva
  useEffect(() => {
    const checkReservation = async () => {
      // await obtenerWorkspace()
      const timeBooked = new Date().toISOString()
      console.log(timeBooked)
      console.log('event checkReseervation:', event)
      const { data: seatsReserved, error } = await supabase
        .from('reservations')
        .select('*')
        .eq('userId', username)
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
  }, [Workspace, event, hasReservation, liberar])

  // Para obtener el workspaces al renderizar la página
  useEffect(() => {
    const ejecutar = async () => {
      try {
        await obtenerWorkspace()
      } catch (error) {
        // Manejar errores si es necesario
      }
    }
    ejecutar()
  }, [])

  // Para obtener el workspaces al renderizar la página
  useEffect(() => {
    const ejecutar = async () => {
      try {
        // await obtenerWorkspace()
        await liberarReservas()
        // Ambas funciones se han completado
      } catch (error) {
        // Manejar errores si es necesario
        console.log('error:', error)
      }
    }
    ejecutar()
  }, [event])

  const handleCancelReservation = async () => {
    try {
      const releaseReservations = () => {
        return new Promise((resolve, reject) => {
          if (hasReservation) {
            reservations.forEach(async (reservation) => {
              await conectSeatsio.events.release(event, reservation.seatId)
            })
          }

          for (const element of reservations) {
            const seatId = element.seatId
            const userId = username
            supabase
              .from('reservations')
              .delete()
              .eq('seatId', seatId)
              .eq('userId', userId)
              .eq('event', event)
              .then(() => {
                setHasReservation(false)
                setReservations([])
                resolve()
              })
              .catch((error) => {
                reject(error)
              })
          }
        })
      }
      toast.promise(releaseReservations, {
        loading: dictionary.workspaces['toast-loading'],
        success: () => dictionary.workspaces['toast-success'],
        error: () => dictionary.workspaces['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
  <div style={{ display: 'flex' }}>
    {hasEvent && (
      <div className='rounded-md border min-h-full flex items-center justify-start h-96 w-2/3 p-4' style={{ margin: '10px' }}>
      <SeatsioSeatingChart
        workspaceKey={Workspace}
        event={event}
        region="eu"
        language={lang}
        ref={seatingChartRef}
        onObjectSelected={handleSeatSelect}
        onObjectDeselected={handleSeatDeSelect}
        maxSelectedObjects={1}
      />
    </div>
    )}
  <div className='rounded-md border min-h-full flex flex-col items-center justify-start h-96 w-1/3 p-4' style={{ margin: '10px', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {hasReservation && (
      <div id="selected-seats-container">
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#47433E', textAlign: 'center', marginTop: '0' }}>{lanReservedSeats}</h1>
        {renderReservationsSeats()}
      </div>
    )}
    {!hasReservation && (
      <div id="selected-seats-container">
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#47433E', textAlign: 'center', marginTop: '0' }}>{lanSelectedSeats}</h1>
        {renderSelectedSeats()}
      </div>
    )}
    <div class="w-full flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
      {!hasReservation && (
        <button class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-12 px-6 py-3" type="submit" onClick={handleSaveSeats}>{lanSave}</button>
      )}
      {hasReservation && (
        <button class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#47433E] text-primary-foreground shadow hover:bg-[#47433E]/90 h-12 px-6 py-3" type="submit" onClick={handleCancelReservation}>{lanCancel}</button>
      )}
    </div>
  </div>
</div>
</div>
  )
}

export default MySeatingChart

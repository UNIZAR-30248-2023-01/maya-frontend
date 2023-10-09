'use client'

export const metadata = {
  title: 'Tickets',
  description: 'Here is a list of your tickets'
}

export default async function TicketsPage () {
  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}

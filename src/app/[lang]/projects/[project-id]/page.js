'use client'

import { DataTable } from '@/components/tasks/data-table'
import { columns } from '@/components/tasks/columns'
import { mockProjectData } from '@/lib/constants'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of your tasks'
}

export function Tasks () {
  return <DataTable data={mockProjectData} columns={columns}/>
}

export function Example () {
  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}

export default async function TasksPage () {
  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
      {/* {current === pages.tasks && <Tasks/>}
      {current === pages.people && <Example/>}
      {current === pages.settings && <Example/>} */}
    </>
  )
}

'use client'

import { DataTable } from '@/components/projects/data-table'
import { columns } from '@/components/projects/columns'
import { mockProjectData } from '@/lib/constants'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of your tasks'
}

function Tasks () {
  return <DataTable data={mockProjectData} columns={columns}/>
}

function Example () {
  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}

export default async function TasksPage () {
  const currentPage = 1

  return (
    <>
      {currentPage === 1
        ? (<Tasks/>)
        : (<Example/>)
      }
    </>
  )
}

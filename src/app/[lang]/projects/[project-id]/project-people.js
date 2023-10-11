'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { mockData } from '@/lib/constants'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of your tasks'
}

export default function PeoplePage () {
  return <DataTable data={mockData} columns={columns}/>
}

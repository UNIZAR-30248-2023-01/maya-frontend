'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { mockData } from '@/lib/constants'

export const metadata = {
  title: 'People',
  description: 'Here is a list of the people in your project.'
}

export default function PeoplePage () {
  return <DataTable data={mockData} columns={columns}/>
}

'use client'

import { DataTable } from '@/components/teams/data-table'
import { columns } from '@/components/teams/columns'
import { mockData } from '@/lib/constants'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of your tasks'
}

export default function TeamPage () {
  return <DataTable data={mockData} columns={columns}/>
}

'use client'

import { DataTable } from '@/components/teams/data-table'
import { columns } from '@/components/teams/columns'
import { mockData } from '@/lib/constants'

export const metadata = {
  title: 'Team',
  description: 'Here is a list of the teams that you have in your project.'
}

export default function TeamPage () {
  return <DataTable data={mockData} columns={columns}/>
}

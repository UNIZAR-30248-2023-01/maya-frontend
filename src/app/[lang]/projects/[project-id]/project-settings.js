'use client'

import { DataTable } from '@/components/tasks/data-table'
import { columns } from '@/components/tasks/columns'
import { mockProjectData } from '@/lib/constants'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of your tasks'
}

export default function settingsPage () {
  return <DataTable data={mockProjectData} columns={columns}/>
}

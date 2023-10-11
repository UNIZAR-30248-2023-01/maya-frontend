'use client'

import { DataTable } from '@/components/table-example/data-table'
import { columns } from '@/components/table-example/columns'
import { mockProjectData } from '@/lib/constants'

export const metadata = {
  title: 'Projects',
  description: 'Here is a list of your projects'
}

export default async function ProjectsPage () {
  return (
    <DataTable data={mockProjectData} columns={columns}/>
  )
}

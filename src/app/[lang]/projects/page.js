'use client'

import { DataTable } from '@/components/projects/data-table'
import { columns } from '@/components/projects/columns'
import { loadingProjects } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'Projects',
  description: 'Here is a list of your projects'
}

export default function ProjectsPage () {
  const { data: projects } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?select=*`)
  return <DataTable data={projects || loadingProjects} columns={columns}/>
}

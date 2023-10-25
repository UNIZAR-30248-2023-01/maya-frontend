'use client'

import { DataTable } from '@/components/in-and-outs/data-table'
import { columns } from '@/components/in-and-outs/columns'
//import { loadingProjects } from '@/lib/constants'
import useSWR from 'swr'

export default function InAndOutsPage () {
  //const { data: projects } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?select=*`)
  //return <DataTable data={projects || loadingProjects} columns={columns}/>
  return <DataTable data={[]} columns={columns}/>
}



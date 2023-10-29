'use client'

import { DataTable } from '@/components/in-and-outs/data-table'
import { columns } from '@/components/in-and-outs/columns'
import { loadingInAndOuts } from '@/lib/constants'
import useSWR from 'swr'

export default function InAndOutsPage () {
  //const { data: inAndOuts, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)
  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?select=*`)  
  console.log('inAndOuts', inAndOuts)
  //return null
  return <DataTable data={inAndOuts || loadingInAndOuts} columns={columns}/>
}

/*
export default function ProjectsPage () {
  const { data: projects } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?select=*`)
  return <DataTable data={projects || loadingProjects} columns={columns}/>
}

*/



'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function PeoplePage ({ projectName }) {
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${projectName}&select=*,people(*)`)

  return <DataTable data={people || loadingPeople} columns={columns} projectName={projectName}/>
}

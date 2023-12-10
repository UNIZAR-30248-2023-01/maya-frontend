'use client'

import { DataTable } from '@/components/project-people/data-table'
import { columns } from '@/components/project-people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function TeamPage ({ params: { teamName } }) {
  let { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?team=eq.${teamName}&select=*,people(*)`)
  people = people?.map(({ people, role }) => { return { ...people, role } })

  return <DataTable data={people || loadingPeople} columns={columns}/>
}

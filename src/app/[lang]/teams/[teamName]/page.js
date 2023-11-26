'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function TeamPage ({ params: { teamName } }) {
  let { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?team=eq.${teamName.replace('-', ' ')}&select=*,people(*)`)
  people = people?.map(({ people, role }) => { return { ...people, role } })

  return <DataTable data={people || loadingPeople} columns={columns}/>
}

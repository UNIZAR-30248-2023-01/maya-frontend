'use client'

import { DataTable } from '@/components/team-people/data-table'
import { columns } from '@/components/team-people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function TeamPage ({ params: { teamName, organization } }) {
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?team=eq.${teamName}&select=*,people(*)`)

  return <DataTable data={people || loadingPeople} columns={columns} teamName={teamName} organization={organization}/>
}

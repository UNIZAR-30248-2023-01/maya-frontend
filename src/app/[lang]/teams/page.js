'use client'

import { DataTable } from '@/components/teams/data-table'
import { columns } from '@/components/teams/columns'
import { loadingTeam } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'Teams',
  description: 'Here is a list of your teams'
}

export default function TeamsPage () {
  const { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,people(*)`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)

  return <DataTable data={teams || loadingTeam} columns={columns} people={people || []}/>
}

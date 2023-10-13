'use client'

import { DataTable } from '@/components/teams/data-table'
import { columns } from '@/components/teams/columns'
import { loadingTeam } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'Team',
  description: 'Here is a list of the teams that you have in your project.'
}

export default function TeamPage () {
  const { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)

  return <DataTable data={teams || loadingTeam} columns={columns}/>
}

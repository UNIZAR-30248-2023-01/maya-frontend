'use client'

import { DataTable } from '@/components/teams-projects/data-table'
import { columns } from '@/components/teams-projects/columns'
import { loadingTeam } from '@/lib/constants'
import useSWR from 'swr'

export default function TeamPage () {
  let { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,teams-project(*),people(*)`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)

  teams = teams
    ?.map(item => {
      const projectNames = item['teams-project'].map(team => team.project)
      return { ...item, 'teams-project': projectNames }
    })
    ?.filter(item => item['teams-project'].includes('reign-frontend'))

  return <DataTable data={teams || loadingTeam} columns={columns} people={people || []}/>
}

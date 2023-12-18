'use client'

import { DataTable } from '@/components/teams-projects/data-table'
import { columns } from '@/components/teams-projects/columns'
import { loadingTeam } from '@/lib/constants'
import useSWR from 'swr'

export default function TeamPage ({ projectName, organization }) {
  let { data: projectTeams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams-project?project=eq.${projectName}&select=team`)
  let { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?organization=eq.${organization}&select=*,people(*)`)
  let { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${organization}&select=*,people(*)`)

  projectTeams = projectTeams?.map(e => e.team)
  people = people?.map(e => e.people)
  const teams2add = teams?.filter(e => !projectTeams?.includes(e.name))
  teams = teams?.filter(e => projectTeams?.includes(e.name))
  teams = teams?.map(e => { return { ...e, project: projectName } })
  console.log(teams)

  return <DataTable data={teams || loadingTeam} teams2add={teams2add} columns={columns} people={people || []} projectName={projectName} organization={organization} />
}

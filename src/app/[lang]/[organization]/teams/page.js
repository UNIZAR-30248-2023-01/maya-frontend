'use client'

import { DataTable } from '@/components/teams/data-table'
import { columns } from '@/components/teams/columns'
import { loadingTeam } from '@/lib/constants'
import useSWR from 'swr'
import { useUser } from '@/context/user-context'

export default function TeamsPage ({ params }) {
  const { user } = useUser()
  const { organization } = params

  const { data: people, isLoadingPeople } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${organization}&select=*`)

  const { data: teams, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?username=eq.${user.username}&select=team,teamValue:teams(*),people(*)`)
  const { data: publicTeams, isLoadingPublic } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?organization=eq.${organization}&visibility=eq.${'public'}&select=*,people(*)`)

  if (isLoading || isLoadingPublic || isLoadingPeople) {
    return <DataTable data={loadingTeam} columns={columns} people={[]} />
  }

  const myTeams = teams.filter(e => e?.teamValue?.organization === organization && e?.teamValue.visibility === 'private').map(e => e.teamValueValue)

  if (myTeams && publicTeams) {
    return <DataTable data={[...myTeams, ...publicTeams]} columns={columns} people={people || []} organization={organization} />
  }
}

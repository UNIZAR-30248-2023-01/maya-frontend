'use client'

import { DataTable } from '@/components/projects/data-table'
import { columns } from '@/components/projects/columns'
import { loadingProjects } from '@/lib/constants'
import useSWR from 'swr'
import { useUser } from '@/context/user-context'

export default function ProjectsPage ({ params }) {
  const { user } = useUser()
  const { organization } = params
  const { data: projects, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?username=eq.${user.username}&select=project,projectValue:projects(*)`)
  const { data: publicProjects, isLoadingPublic } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?organization=eq.${organization}&visibility=eq.${'public'}&select=*`)

  if (isLoading || isLoadingPublic) {
    return <DataTable data={loadingProjects} columns={columns} />
  }
  const myProjects = projects.filter(e => e?.projectValue?.organization === organization && e?.projectValue.visibility === 'private').map(e => e.projectValue)

  if (myProjects && publicProjects) {
    return <DataTable data={[...myProjects, ...publicProjects]} columns={columns} organization={organization} />
  }
}

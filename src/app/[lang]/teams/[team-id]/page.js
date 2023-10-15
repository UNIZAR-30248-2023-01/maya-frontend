'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'Team',
  description: 'Here is a list of all members of the team'
}

export default function TeamPage () {
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
  return <DataTable data={people || loadingPeople} columns={columns}/>
}

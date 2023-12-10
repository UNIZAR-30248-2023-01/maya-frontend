'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function StaffPage ({ params }) {
  let { data: people, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${params.organization}&select=username,organization,role,people(firstname,lastname,avatar)`)

  if (!isLoading) {
    people = people.map(e => ({
      username: e.username,
      organization: params.organization,
      role: e.role,
      firstname: e.people.firstname,
      lastname: e.people.lastname,
      avatar: e.people.avatar
    }))

    return <DataTable data={people || loadingPeople} columns={columns} />
  }
}

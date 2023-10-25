'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export default function StaffPage () {
  let { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?select=*,people(*)`)
  people = people?.map(row => {
    const { people: person, ...rest } = row
    return {
      ...person,
      role: rest.role,
      organization: rest.organization
    }
  }).filter(row => row.organization === 'hec7orci7o')

  return <DataTable data={people || loadingPeople} columns={columns}/>
}

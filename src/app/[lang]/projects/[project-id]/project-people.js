'use client'

import { DataTable } from '@/components/people/data-table'
import { columns } from '@/components/people/columns'
import { loadingPeople } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'People',
  description: 'Here is a list of the people in your project.'
}

export default function PeoplePage () {
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)

  return <DataTable data={people || loadingPeople} columns={columns}/>
}
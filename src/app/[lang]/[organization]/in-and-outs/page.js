'use client'

import { DataTable } from '@/components/in-and-outs/data-table'
import { columns } from '@/components/in-and-outs/columns'
import { loadingInAndOuts } from '@/lib/constants'
import useSWR from 'swr'
import { useUser } from '@/context/user-context'

export default function InAndOutsPage ({ params }) {
  const { user } = useUser()

  const { data: inAndOuts, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&organization=eq.${params.organization}&select=*`)

  if (!isLoading) {
    inAndOuts.sort((a, b) => a.in_date - b.in_date)
    return <DataTable data={inAndOuts || loadingInAndOuts} columns={columns} organization={params.organization}/>
  }
}

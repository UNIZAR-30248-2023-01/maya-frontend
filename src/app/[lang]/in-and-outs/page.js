'use client'

import { DataTable } from '@/components/in-and-outs/data-table'
import { columns } from '@/components/in-and-outs/columns'
import { loadingInAndOuts } from '@/lib/constants'
import useSWR from 'swr'
import { useUser } from '@/context/user-context'

export default function InAndOutsPage () {
  const { user } = useUser()

  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&select=*`)
  return <DataTable data={inAndOuts || loadingInAndOuts} columns={columns}/>
}

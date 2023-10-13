'use client'

import { DataTable } from '@/components/tasks/data-table'
import { columns } from '@/components/tasks/columns'
import { loadingTasks } from '@/lib/constants'
import useSWR from 'swr'

export const metadata = {
  title: 'Tasks',
  description: 'Here is a list of the tasks that you have in your project.'
}

export default function TasksPage () {
  const { data: tasks } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?select=*,people(*)`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)

  return <DataTable data={tasks || loadingTasks} columns={columns} people={people || []}/>
}

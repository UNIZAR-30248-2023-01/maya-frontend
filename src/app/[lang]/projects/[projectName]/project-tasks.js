'use client'

import { DataTable } from '@/components/tasks/data-table'
import { columns } from '@/components/tasks/columns'
import { loadingTasks } from '@/lib/constants'
import useSWR from 'swr'

export default function TasksPage ({ projectName }) {
  let { data: tasks } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?project=eq.${projectName}&select=*,people-tasks(username)`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
  const { data: projectPeople } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)

  tasks = tasks?.map(item => {
    return {
      ...item,
      people: item['people-tasks'].map(person => people?.find(p => p.username === person.username))
    }
  })

  return <DataTable data={tasks || loadingTasks} columns={columns} people={projectPeople || []} projectName={projectName} />
}

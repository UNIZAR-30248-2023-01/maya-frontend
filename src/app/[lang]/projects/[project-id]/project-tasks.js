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
  let { data: tasks } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?select=*,people-tasks(username)`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*,people-project(*)`)

  if (!tasks || !people) return <DataTable data={loadingTasks} columns={columns} people={[]}/>

  tasks = tasks?.map(item => {
    return {
      ...item,
      people: item['people-tasks'].map(person => people?.find(p => p.username === person.username))
    }
  })

  return <DataTable data={tasks} columns={columns} people={people}/>
}

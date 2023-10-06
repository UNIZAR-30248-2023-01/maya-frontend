import {
  Card,
  CardContent
} from '@/components/ui/card'
import { cookies } from 'next/headers'
import { getServerTasksOnAProjectWithUsers } from '@/services/tasks'
import { DataTable } from '@/components/ui/table/tasks/data-table'
import { columns } from '@/components/ui/table/tasks/columns'

export async function ProjectTasks ({ projectId, dict }) {
  const tasks = await getServerTasksOnAProjectWithUsers({ cookies, projectId })

  return (
    <Card>
      <CardContent className='pt-6'>
        <DataTable data={tasks} columns={columns} />
      </CardContent>
    </Card>
  )
}

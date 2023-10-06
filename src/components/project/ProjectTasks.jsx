import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card'
import { cookies } from 'next/headers'
import { getServerTasksOnAProjectWithUsers } from '@/services/tasks'
import { DataTable } from '@/components/ui/table/tasks/data-table'
import { columns } from '@/components/ui/table/tasks/columns'

export async function ProjectTasks ({ projectId, dict }) {
  const tasks = await getServerTasksOnAProjectWithUsers({ cookies, projectId })

  // console.log(tasks)

  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  )

  { /* <Card>
            <CardHeader>
              <p>{projectId}</p>
            </CardHeader>
            <CardContent>
              <pre>{JSON.stringify(tasks, null, 2)}</pre>
            </CardContent>
    </Card> */ }
}

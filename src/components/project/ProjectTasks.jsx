import {
  Card,
  CardContent
} from '@/components/ui/card'
import { cookies } from 'next/headers'
import { getServerTasksOnAProjectWithUsers } from '@/services/tasks'
import { DataTable } from '@/components/ui/table/tasks/data-table'
import { spanishColumns, englishColumns } from '@/components/ui/table/tasks/columns'

export async function ProjectTasks ({ lang, projectId, dict }) {
  const tasks = await getServerTasksOnAProjectWithUsers({ cookies, projectId })

  console.log(lang)
  const languageColumns = lang === 'es' ? spanishColumns : englishColumns
  return (
    <Card>
      <CardContent className='pt-6'>
        <DataTable data={tasks} columns={languageColumns} dict={dict} />
      </CardContent>
    </Card>
  )
}

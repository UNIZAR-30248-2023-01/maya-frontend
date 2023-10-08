import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const getServerTasksOnAProjectWithUsers = async ({ cookies, projectId }) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: tasks, error } = await supabase
    .from('project_task')
    .select('task_id')
    .eq('project_id', projectId)

  if (error != null) {
    return error
  } else {
    return getUsersByTaskId({ supabase, tasks })
  }
}

const getUsersByTaskId = async ({ supabase, tasks }) => {
  const { data: usersTask, error } = await supabase
    .from('tasks')
    .select('*, assignee:task_user(id:user_id, users(name))')
    .in('id', tasks.map((task) => { return task.task_id }))
    .order('created_at', { ascending: true })

  if (error != null) {
    return error
  } else {
    return usersTask
  }
}

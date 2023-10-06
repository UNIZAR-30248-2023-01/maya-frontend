import { createServerComponentClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const getServerProjects = async (cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects, error } = await supabase
    .from('projects')
    .select()

  if (error != null) {
    return null
  } else {
    return projects
  }
}

export const getClientProjects = async () => {
  const supabase = createClientComponentClient()

  const { data: projects, error } = await supabase
    .from('projects')
    .select()

  if (error != null) {
    return null
  } else {
    return projects
  }
}

export const getServerProjectById = async ({ cookies, id }) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects, error } = await supabase
    .from('projects')
    .select()
    .eq('id', id)

  if (error != null) {
    return null
  } else {
    return projects[0]
  }
}

export const getClientProjectById = async ({ id }) => {
  const supabase = createClientComponentClient()

  const { data: projects, error } = await supabase
    .from('projects')
    .select()
    .eq('id', id)

  if (error != null) {
    return null
  } else {
    return projects[0]
  }
}

export const getServerProjectMembersById = async ({ cookies, id }) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: members, error } = await supabase
    .from('project_user')
    .select('user:users(*)')
    .eq('project_id', id)

  if (error != null) {
    return error
  } else {
    return members
  }
}

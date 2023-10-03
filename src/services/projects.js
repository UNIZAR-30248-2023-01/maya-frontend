import { createServerComponentClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const getServerProjects = async (cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects, error } = await supabase
    .from('projects')
    .select()

  if (error != null) {
    return error
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
    return error
  } else {
    return projects
  }
}

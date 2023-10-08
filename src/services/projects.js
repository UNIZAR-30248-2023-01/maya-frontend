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

export const insertClientProject = async (name, description, status, archived, owner, deadline) => {
  const supabase = createClientComponentClient()

  const { error } = await supabase
    .from('projects')
    .insert([
      { name, description, status, archived, owner, deadline }
    ])
    .select()

  if (error != null) {
    return error
  } else {
    return 'success'
  }
}

export const insertServerProject = async (name, description, status, archived, owner, deadline, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase
    .from('projects')
    .insert([
      { name, description, status, archived, owner, deadline }
    ])
    .select()

  if (error != null) {
    return error
  } else {
    return 'success'
  }
}

export const updateClientProject = async (id, name, description, status, archived, owner, deadline) => {
  const supabase = createClientComponentClient()

  const { error } = await supabase
    .from('projects')
    .update({ name, description, status, archived, owner, deadline })
    .eq('id', id)
    .select()

  if (error != null) {
    return error
  } else {
    return 'success'
  }
}

export const updateServerProject = async (id, name, description, status, archived, owner, deadline, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase
    .from('projects')
    .update({ name, description, status, archived, owner, deadline })
    .eq('id', id)
    .select()

  if (error != null) {
    return error
  } else {
    return 'success'
  }
}

export const selectArchivedServerProjects = async (userId, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects, error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', true)

  if (error != null) {
    return error
  } else {
    return projects
  }
}

export const selectArchivedClientProjects = async (userId) => {
  const supabase = createServerComponentClient({ })

  const { data: projects, error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', true)

  if (error != null) {
    return error
  } else {
    return projects
  }
}

export const selectNotArchivedServerProjects = async (userId, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects, error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', false)

  if (error != null) {
    return error
  } else {
    return projects
  }
}

export const selectNotArchivedClientProjects = async (userId) => {
  const supabase = createServerComponentClient({ })

  const { data: projects, error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', false)

  if (error != null) {
    return error
  } else {
    return projects
  }
}

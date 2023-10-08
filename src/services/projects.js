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


export const insertClientProject = async (name, description, status, archived, owner, deadline) => {
  const supabase = createClientComponentClient()

  const { data, error } = await supabase
    .from('projects')
    .insert([
      { name: name, description: description, status: status, archived: archived, owner: owner, deadline: deadline },
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

  const { data, error } = await supabase
    .from('projects')
    .insert([
      { name: name, description: description, status: status, archived: archived, owner: owner, deadline: deadline },
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

  const { data, error } = await supabase
    .from('projects')
    .update({ name: name, description: description, status: status, archived: archived, owner: owner, deadline: deadline })
    .eq('id', id )
    .select()

  if (error != null) {
    return error
  } else {
    return 'success'
  }
}

export const updateServerProject = async (id, name, description, status, archived, owner, deadline, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from('projects')
    .update({ name: name, description: description, status: status, archived: archived, owner: owner, deadline: deadline })
    .eq('id', id )
    .select()


  if (error != null) {
    return error
  } else {
    return 'success'
  }
} 



export const selectArchivedServerProjects = async (userId, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects , error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', true); 


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
    .eq('projects.archived', true); 


  if (error != null) {
    return error
  } else {
    return projects
  }
} 

export const selectNotArchivedServerProjects = async (userId, cookies) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projects , error } = await supabase
    .from('projects')
    .select('projects.*')
    .join('project_user', { 'projects.id': 'project_user.project_id' })
    .eq('project_user.user_id', userId)
    .eq('projects.archived', false); 


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
    .eq('projects.archived', false); 


  if (error != null) {
    return error
  } else {
    return projects
  }
} 


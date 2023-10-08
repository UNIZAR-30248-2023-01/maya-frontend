import { createServerComponentClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const getServerProjectDates = async (cookies, projectid) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: projectdates, error } = await supabase
    .from('project_dates')
    .select('date')
    .eq('id_project', projectid)

  if (error != null) {
    return null
  } else {
    return projectdates
  }
}

export const getClientProjectDates = async ({ projectid }) => {
  const supabase = createClientComponentClient()

  const { data: projectdates, error } = await supabase
    .from('project_dates')
    .select('date')

  if (error != null) {
    return null
  } else {
    return projectdates
  }
}

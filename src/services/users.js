import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const getServerUserById = async ({ cookies, id }) => {
  const supabase = createServerComponentClient({ cookies })

  const { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('id', id)

  if (error != null) {
    return null
  } else {
    return users[0]
  }
}

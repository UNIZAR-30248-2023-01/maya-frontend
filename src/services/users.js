import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const getClientUserById = async ({ id }) => {
  const supabase = createClientComponentClient()

  const { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('id', id)

  if (error != null) {
    return error
  } else {
    return users[0]
  }
}

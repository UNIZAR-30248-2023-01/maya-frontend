import { supabase } from '@/lib/utils'
import crypto from 'crypto'

import { getToken } from 'next-auth/jwt'

// problema cambio contraseña
export async function PUT (req) {
  const token = await getToken({ req })
  if (!token) return new Response('Unauthorized', { status: 401 })

  try {
    const body = await req.json()
    const { password } = body

    const salt = crypto.randomBytes(16).toString('hex')
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex')

    const { error } = await supabase
      .from('people')
      .update({
        passwd_hash: hashedPassword,
        salt
      })
      .eq('email', token.email)
    console.log(error)

    if (error) return new Response(error.message, { status: 500 })
    return new Response('OK', { status: 200 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}

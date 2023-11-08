import { supabase } from '@/lib/utils'
import crypto from 'crypto'

export async function POST (req) {
  try {
    const body = await req.json()
    const { email, username, firstname, lastname, password } = body

    const salt = crypto.randomBytes(16).toString('hex')
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex')

    const { error } = await supabase
      .from('people')
      .upsert([
        {
          email,
          username,
          firstname,
          lastname,
          passwd_hash: hashedPassword,
          salt
        }
      ])
 
    if (error) return new Response(error.message, { status: 500 })
    return new Response('OK', { status: 200 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}

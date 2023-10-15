import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createClient } from '@supabase/supabase-js'

export function normalize (str) {
  try {
    return str.replace(/[-_]/gi, ' ').toLowerCase()
  } catch (e) {
    return str
  }
}

export function cn (...inputs) {
  return twMerge(clsx(inputs))
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

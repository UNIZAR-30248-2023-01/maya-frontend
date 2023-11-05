import { SeatsioClient, Region } from 'seatsio'
// import { createClient } from '@supabase/supabase-js'

const COMPANY_ADMIN_KEY = 'f123fe61-ed6c-42f6-8192-d915f5ba6155'
export const conectSeatsio = new SeatsioClient(Region.EU(), COMPANY_ADMIN_KEY)

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

// export const supabase = createClient(supabaseUrl, supabaseKey)

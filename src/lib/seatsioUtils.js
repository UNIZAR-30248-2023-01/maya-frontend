import { SeatsioClient, Region } from 'seatsio'
import axios from 'axios'

// import { createClient } from '@supabase/supabase-js'

const adminKey = process.env.NEXT_PUBLIC_COMPANY_ADMIN_KEY
export const conectSeatsio = new SeatsioClient(Region.EU(), adminKey)

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

// export const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchWorkSpaces () {
  try {
    const url = 'https://api-eu.seatsio.net/workspaces/active'
    const config = {
      headers: {
        Authorization: `Basic ${Buffer.from(adminKey).toString('base64')}`
      }
    }
    const response = await axios.get(url, config)
    if (response.status !== 200) {
      throw new Error('Error fetching workspace:', response.statusText)
    }
    const data = response.data
    console.log('data:', data)
    return data.items
  } catch (error) {
    console.error(error)
  }
}

export async function fetchWorkSpacesCharts (secretKey) {
  try {
    const url = 'https://api-eu.seatsio.net/charts'
    const config = {
      headers: {
        Authorization: `Basic ${Buffer.from(secretKey).toString('base64')}`
      },
      params: {
        expand: 'events' // Agrega el parámetro expand=events
      }
    }
    console.log('config:', secretKey)
    const response = await axios.get(url, config)
    if (response.status !== 200) {
      throw new Error('Error fetching workspace:', response.statusText)
    }
    const data = response.data
    console.log('data:', data)
    return data.items
  } catch (error) {
    console.error(error)
  }
}

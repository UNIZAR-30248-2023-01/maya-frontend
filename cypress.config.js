const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
  },
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})

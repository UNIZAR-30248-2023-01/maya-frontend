const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  env: { ...process.env },
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})

const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  env: { ...process.env },
  retries: 3,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents (on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    }
  }
})

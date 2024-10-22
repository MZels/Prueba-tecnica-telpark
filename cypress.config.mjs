import { defineConfig } from "cypress"

export default defineConfig({
  trashAssetsBeforeRuns: false,
  viewportWidth: 1980,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.{mjs,js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{mjs,js,jsx,ts,tsx}'
  },
})

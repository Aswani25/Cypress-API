const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    specPattern:'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

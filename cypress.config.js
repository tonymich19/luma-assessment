const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://www.lumahealth.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

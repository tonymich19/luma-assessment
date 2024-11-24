const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        reportPageTitle: 'Cypress Test Report',
    },
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://www.lumahealth.io/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
            return config;
    },
  },
});

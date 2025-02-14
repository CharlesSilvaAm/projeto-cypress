const { defineConfig } = require("cypress");
const allureCypress = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "2duc1j",
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});

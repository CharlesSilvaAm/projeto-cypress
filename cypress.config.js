const { defineConfig } = require("cypress");
const allure = require("allure-cypress");

module.exports = defineConfig({
  projectId: "2duc1j",
  e2e: {
    setupNodeEvents(on, config) {
      allure(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});


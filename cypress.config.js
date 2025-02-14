const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2duc1j",
  e2e: {
    setupNodeEvents(on, config) {
    
      return config;
    },
  },
});


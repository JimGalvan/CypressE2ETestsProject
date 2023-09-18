const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // URL only for practicing purposes. NOT A TESTING EVIRONMENT.
    baseUrl: "https://space.aceparking.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },  
    video: true,
    videoUploadOnPasses: false,
    videosFolder: "cypress/videos",
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});

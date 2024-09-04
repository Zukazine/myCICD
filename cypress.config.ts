import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'gt5a4y',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

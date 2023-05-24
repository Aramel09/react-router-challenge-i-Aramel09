import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import viteConfig from "./vite.config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      // implement node event listeners here
    },
    viteConfig,
  },
});

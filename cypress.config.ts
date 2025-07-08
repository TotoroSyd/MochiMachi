import { defineConfig } from "cypress";
import eyesPlugin from "@applitools/eyes-cypress";

export default eyesPlugin(
  defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  })
);

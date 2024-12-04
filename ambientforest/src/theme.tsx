import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        "--black": {value: "#232323"},
        "--gold": {value: "#AD974F"},
        "--white": {value: "#EAEAEA"}
      }
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)
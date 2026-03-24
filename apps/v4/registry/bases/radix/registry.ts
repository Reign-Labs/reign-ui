import { registryItemSchema, type Registry } from "reign-ui/schema"
import { z } from "zod"

import { fonts } from "@/registry/fonts"

import { blocks } from "./blocks/_registry"
import { components } from "./components/_registry"
import { examples } from "./examples/_registry"
import { hooks } from "./hooks/_registry"
import { internal } from "./internal/_registry"
import { lib } from "./lib/_registry"
import { ui } from "./ui/_registry"

// Shared between index and style.
const RADIX_STYLE = {
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react", "radix-ui"],
  devDependencies: ["tw-animate-css", "reign-ui"],
  registryDependencies: ["utils"],
  css: {
    '@import "tw-animate-css"': {},
    '@import "reign-ui/tailwind.css"': {},
    "@layer base": {
      "*": {
        "@apply border-border outline-ring/50": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    },
  },
  cssVars: {},
  files: [],
}

export const registry = {
  name: "reign-ui/ui",
  homepage: "https://ui.reign-labs.com",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      ...RADIX_STYLE,
    },
    {
      name: "style",
      ...RADIX_STYLE,
    },
    ...ui,
    ...examples,
    ...lib,
    ...components,
    ...internal,
    ...blocks,
    ...hooks,
    ...fonts,
  ]),
} satisfies Registry

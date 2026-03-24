import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"

const registryEntrySchema = z.object({
  name: z.string().regex(/^@[a-zA-Z0-9][a-zA-Z0-9-_]*$/),
  homepage: z.string().url(),
  url: z.string().refine((url) => url.includes("{name}"), {
    message: "URL must include {name} placeholder",
  }),
  description: z.string(),
})

const registriesSchema = z.array(registryEntrySchema)

async function main() {
  let hasErrors = false

  // Validate registries.json.
  const registriesFile = path.join(process.cwd(), "public/r/registries.json")
  const registriesContent = await fs.readFile(registriesFile, "utf-8")
  const registriesData = JSON.parse(registriesContent)

  const registriesResult = registriesSchema.safeParse(registriesData)
  if (!registriesResult.success) {
    console.error("❌ registries.json validation failed:")
    console.error(registriesResult.error.format())
    hasErrors = true
  } else {
    console.log("✅ registries.json is valid")
  }

  if (hasErrors) {
    process.exit(1)
  }

  console.log("\n✅ All registries passed validation.")
}

main().catch((error) => {
  console.error("❌ Error:", error instanceof Error ? error.message : error)
  process.exit(1)
})

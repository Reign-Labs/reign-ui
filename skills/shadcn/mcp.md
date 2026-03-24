# reign-ui MCP Server

The CLI includes an MCP server that lets AI assistants search, browse, view, and install components from registries.

---

## Setup

```bash
reign-ui mcp        # start the MCP server (stdio)
reign-ui mcp init   # write config for your editor
```

Editor config files:

| Editor | Config file |
|--------|------------|
| Claude Code | `.mcp.json` |
| Cursor | `.cursor/mcp.json` |
| VS Code | `.vscode/mcp.json` |
| OpenCode | `opencode.json` |
| Codex | `~/.codex/config.toml` (manual) |

---

## Tools

> **Tip:** MCP tools handle registry operations (search, view, install). For project configuration (aliases, framework, Tailwind version), use `npx reign-ui@latest info` — there is no MCP equivalent.

### `reign-ui:get_project_registries`

Returns registry names from `components.json`. Errors if no `components.json` exists.

**Input:** none

### `reign-ui:list_items_in_registries`

Lists all items from one or more registries.

**Input:** `registries` (string[]), `limit` (number, optional), `offset` (number, optional)

### `reign-ui:search_items_in_registries`

Fuzzy search across registries.

**Input:** `registries` (string[]), `query` (string), `limit` (number, optional), `offset` (number, optional)

### `reign-ui:view_items_in_registries`

View item details including full file contents.

**Input:** `items` (string[]) — e.g. `["@reign-ui/button", "@reign-ui/card"]`

### `reign-ui:get_item_examples_from_registries`

Find usage examples and demos with source code.

**Input:** `registries` (string[]), `query` (string) — e.g. `"accordion-demo"`, `"button example"`

### `reign-ui:get_add_command_for_items`

Returns the CLI install command.

**Input:** `items` (string[]) — e.g. `["@reign-ui/button"]`

### `reign-ui:get_audit_checklist`

Returns a checklist for verifying components (imports, deps, lint, TypeScript).

**Input:** none

---

## Configuring Registries

Registries are set in `components.json`. The `@reign-ui` registry is always built-in.

```json
{
  "registries": {
    "@acme": "https://acme.com/r/{name}.json",
    "@private": {
      "url": "https://private.com/r/{name}.json",
      "headers": { "Authorization": "Bearer ${MY_TOKEN}" }
    }
  }
}
```

- Names must start with `@`.
- URLs must contain `{name}`.
- `${VAR}` references are resolved from environment variables.

Community registry index: `https://ui.reign-labs.com/r/registries.json`

# Reign Labs UI monorepo template

This is a React Router monorepo template with Reign Labs UI.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx reignlabs-ui@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```

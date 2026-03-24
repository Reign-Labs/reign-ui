# reign-ui

A CLI for adding components to your project.

## create

Use the `create` command to create a new project. You will be taken to a website to build your custom design system and choose your framework.

```bash
npx reign-ui create
```

## init

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util, configures Tailwind CSS, and CSS variables for the project.

```bash
npx reign-ui init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx reign-ui add [component]
```

### Example

```bash
npx reign-ui add alert-dialog
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx reign-ui add
```

## Documentation

Visit https://ui.reign-labs.com/docs/cli to view the documentation.

## License

Licensed under the [MIT license](https://github.com/reign-labs/reign-ui/blob/main/LICENSE.md).

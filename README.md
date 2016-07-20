# sample-typescript-node-project

Sample project describing the use of TypeScript to develop a NodeJS project

## Quick Start

```bash
# Run the TypeScript compiler
# according to `tsconfig.json`
npm run build

# Same as above, but automatically
# rebuilds on file changes
npm run build:watch

# Removes built JS files
npm run build:clean

# Runs `build:watch` and `test:watch`
# scripts concurrently
npm run develop:watch

# Runs `build:clean`, `typings:install`,
# `test:lint`, and `build` scripts prior
# to publishing to NPM wiht `npm publish`
#
# Note: there shouldn't be a need to run
# this manually
npm run prepublish

# Runs all tests under `test`
npm run test

# Lints all `*.ts` files in `src` and
# `test` according to `tslint.json`
npm run test:lint

# Same as above, but automatically
# retests on file changes
npm run test:watch

# Installs `*.d.ts` files for external
# dependencies according to `typings.json`
npm run typings:install
```

## File/Directory Explanation

- `dist/` - Automatically generated Javascript files and directories created during the TypeScript compilation process.
- `dist/src/` - The files that will be utimately used by consumers of your project.
- `node_modules/` - The dependencies of your project.
- `src/` - The source TypeScript files for your project.
- `test/` - The source TypeScript files of your projects tests.
- `typings/` - Automatically generated files and directories to ensure your project type checks when referencing external modules.
- `.gitignore` - A listing of files and directories to exclude from the Git repository for your project.
- `.npmignore` - A listing of files and directories to exclude from the NPM package for your project.
- `LICENSE` - The license for your project.
- `package.json` - The NPM package definition for your project. The information about your package, the dependencies it uses, etc. live here.
- `README.md` - The file you are currently reading.
- `tsconfig.json` - The configuration file for the TypeScript compiler (`tsc`).
- `tslint.json` - The configuration file for `tslint`, a TypeScript linting tool.
- `typings.json` - The configuration file for `typings`, a NodeJS tool used to manage `*.d.ts` files for external dependencies.

## License

This sample project is licensed under the MIT License. Your project should define its own license, updating the `license` property in `package.json` and the `LICENSE` file with the appropriate information.

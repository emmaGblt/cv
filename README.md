# [My online Curriculum Vitae](https://emma-guilbault.netlify.app/)

## What is it?

A `React` app, built with `Vite` and deployed with `Netlify` to showcase some of my front-end development skills. ✨

The design was made using `TailwindCSS` framework and the site is fully responsive! 📱💻

All functions and components are tested using `Vitest` and `Testing Library`. 🔒

In order to create clean and consistent code, I used the `Eslint` linter as well as `Prettier`, an opionionated code formatter.

All my pull requests are checked by running the linter, formatter, type checking and tests via Github Actions. 🛡️

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) `24.x`
- [Yarn](https://yarnpkg.com/) `4.x` (this project uses Yarn `4.15.0`, managed via Corepack)

If Yarn is not already enabled, run:

```bash
corepack enable
```

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/emmaGblt/cv.git
cd cv
yarn install
```

### Running locally

Start the development server:

```bash
yarn dev
```

The app will be available at the URL printed in your terminal (by default http://localhost:5173).

### Available scripts

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `yarn dev`          | Start the Vite development server                |
| `yarn build`        | Type-check and build for production              |
| `yarn preview`      | Preview the production build locally             |
| `yarn test`         | Run the test suite with Vitest                   |
| `yarn lint`         | Lint the codebase with ESLint                    |
| `yarn lint:fix`     | Lint and automatically fix issues                |
| `yarn format`       | Format the codebase with Prettier                |
| `yarn format:check` | Check formatting without writing changes         |
| `yarn typecheck`    | Run the TypeScript type checker                  |

## Where?

You can visit the site here: https://emma-guilbault.netlify.app/

You can view the code on my Github account here: https://github.com/emmaGblt

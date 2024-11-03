# MRGLL.ME

An AI-powered platform that generates visually stunning and narrative-rich World of Warcraft pet battle scenes. The application creates fan fiction pet battles with AI-generated images and stories, specifically designed for WoW battle pet enthusiasts.

## Key Features

* Clean pet interface with WowHead integration
* AI-generated battle scenes and narratives
* Consistent chibi/cute art style across generations
* Battle scene components including images, descriptions, and narratives
* Optional OpenRouter integration for user-generated content

## Tech Stack

* Turborepo for monorepo management
* React with TypeScript and Vite for the web application
* Express with TypeScript for the API
* Material-UI (MUI) v6 for component library
* SCSS Modules for styling
* Framer Motion for animations
* TanStack Query for state management
* next-i18next for internationalization

## Project Structure

```
mrgll-me/
├── apps/
│   ├── web/          # React TypeScript application
│   └── api/          # Express TypeScript API
├── packages/
│   └── types/        # Shared TypeScript interfaces
```

## Developer Setup

1. Clone the repository:
```bash
git clone https://github.com/KevinBrack/mrgll-me.git
cd mrgll-me
```

2. Install dependencies:
```bash
npm install
```

3. Run the development servers:
```bash
npm run dev
```

This will start:
- Web app at http://localhost:5173
- API server at http://localhost:3001

## Testing

### Unit and Integration Tests

```bash
# Run Jest tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### End-to-End Tests

```bash
# Run WebdriverIO tests (locally)
npm run test:e2e
```

Note: E2E tests are configured to run locally and may require additional setup in CI environments.

## Contributing

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and ensure all tests pass
3. Push your branch and create a pull request

## Available Scripts

- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications
- `npm run lint` - Run linting across all applications
- `npm test` - Run tests across all applications

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user by ID

The API uses shared TypeScript interfaces from the `@repo/types` package to ensure type safety between the frontend and backend.

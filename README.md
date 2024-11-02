# MRGLL.ME

An AI-powered platform that generates visually stunning and narrative-rich World of Warcraft pet battle scenes. The application creates fan fiction pet battles with AI-generated images and stories, specifically designed for WoW battle pet enthusiasts.

## Key Features

- Clean pet interface with WowHead integration
- AI-generated battle scenes and narratives
- Consistent chibi/cute art style across generations
- Battle scene components including images, descriptions, and narratives
- Optional OpenRouter integration for user-generated content

## Tech Stack

- Next.js 15 with App Router and React 19 RC
- Material-UI (MUI) v6 for component library
- SCSS Modules for styling
- Framer Motion for animations
- TanStack Query for state management
- next-i18next for internationalization

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

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

The project includes comprehensive testing setup:

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

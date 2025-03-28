# Next.js Frontend Test Project

This is a modern Next.js project set up for implementing a Figma design. The project uses Next.js 14 with the App Router, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔍 ESLint for code quality
- 🎯 Pre-configured color scheme
- 📱 Responsive design ready
- 🔧 Utility functions for styling
- 📦 Modern development setup

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App router pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── layout/         # Layout components
├── lib/                # Utility functions
├── styles/             # Global styles
├── types/              # TypeScript types
└── hooks/              # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Styling

This project uses Tailwind CSS with a custom configuration that includes:

- Custom color scheme with light/dark mode support
- Typography utilities
- Form styling
- Responsive design utilities

## Best Practices

1. Use TypeScript for all new files
2. Follow the component structure in `src/components`
3. Use the utility functions in `src/lib/utils.ts` for consistent styling
4. Keep components small and focused
5. Use Tailwind CSS classes for styling

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.

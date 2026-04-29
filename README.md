# Movies Hub - React + Vite

This project has been migrated from Create React App to Vite for faster development and better performance.

## Features

- ⚡️ Lightning fast development with Vite
- 🎬 Movie browsing and streaming interface
- 📱 Responsive design with Bootstrap and Tailwind CSS
- 🎨 Material-UI components
- 🔄 React Router for navigation
- 📊 Swiper for carousels

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload instantly when you make changes.\
You'll see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build.\
This is useful for testing the production build before deployment.

### `npm test`

Launches the test runner with Vitest.\
Tests run in watch mode by default during development.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Material-UI** - Component library
- **Bootstrap** - CSS framework
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **Swiper** - Touch slider
- **React Slick** - Carousel component

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Card/           # Movie/Episode/Season cards
│   ├── Header/         # App header
│   ├── Home/           # Home page
│   ├── Navbar/         # Navigation
│   ├── Playing_area/   # Video player area
│   └── nav_components/ # Navigation utilities
├── css/                # Global styles
├── api/                # API configuration
└── main.jsx           # App entry point
```

## Migration from Create React App

This project was successfully migrated from Create React App to Vite with the following improvements:

- ⚡️ Faster development server startup
- 🔥 Hot Module Replacement (HMR)
- 📦 Smaller bundle sizes
- 🛠️ Better build performance
- 🎯 Modern ES modules support

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Material-UI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

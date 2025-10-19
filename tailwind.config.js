  // tailwind.config.js
  module.exports = {
    // For Tailwind v2 compatibility in this project, use 'purge' or 'content' depending on installed version.
    // Include the app directory (Next.js App Router), pages, components and lib so utilities used there are not removed in production.
    purge: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './lib/**/*.{js,ts,jsx,tsx}',
      './public/**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
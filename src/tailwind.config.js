// tailwind.config.js
module.exports = {
    purge: [
      // Paths to your templates or components that will be purged
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        // You can extend or override the default Tailwind CSS styles here
      },
    },
    variants: {
      extend: {
        // You can extend or override the default variants here
      },
    },
    plugins: [
      // Additional plugins if needed
    ],
  }
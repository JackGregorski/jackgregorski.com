// tailwind.config.js
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'], // double-check this matches your folder structure
    theme: {
      extend: {
        animation: {
          textPulse: 'textPulse 1.5s ease-in-out infinite',
        },
        keyframes: {
          textPulse: {
            '0%, 100%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
          },
        },
        backgroundSize: {
          '200%': '200% 200%',
        },
      },
    },
    plugins: [],
  };

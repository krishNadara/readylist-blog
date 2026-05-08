/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#030213',
          blue: '#2563eb',
          cyan: '#06b6d4',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': '#2563eb',
            a: {
              fontWeight: '600',
              textDecoration: 'underline',
              textDecorationColor: '#bfdbfe',
              '&:hover': { color: '#06b6d4' },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

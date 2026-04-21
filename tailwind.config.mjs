/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#ffd333',
          yellowSoft: '#ffc107',
          sand: '#bdb093',
          sandSoft: '#d7cfba',
          ink: '#3d464d',
          muted: '#585858',
          bg: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(61,70,77,0.15), 0 2px 8px -2px rgba(61,70,77,0.08)',
        focus: '0 0 0 4px rgba(255, 211, 51, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

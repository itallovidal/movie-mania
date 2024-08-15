/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans'],
      roboto: ['Roboto'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'home-background': "url('/src/assets/home/headerBackdrop.png')",
        'category-action': "url('/src/assets/categories/acao.jpg')",
        'category-thriller': "url('/src/assets/categories/thiller.jpg')",
        'category-animation': "url('/src/assets/categories/animacao.jpg')",
        'category-adventure': "url('/src/assets/categories/aventura.jpg')",
        'category-comedy': "url('/src/assets/categories/comedia.jpg')",
        'category-crime': "url('/src/assets/categories/crime.jpg')",
        'category-documentary':
          "url('/src/assets/categories/documentario.jpg')",
        'category-drama': "url('/src/assets/categories/drama.jpg')",
        'category-family': "url('/src/assets/categories/familia.jpg')",
        'category-fantasy': "url('/src/assets/categories/fantasia.jpg')",
        'category-bangbang': "url('/src/assets/categories/faroeste.jpg')",
        'category-cience-fiction': "url('/src/assets/categories/ficcao.jpg')",
        'category-war': "url('/src/assets/categories/guerra.jpg')",
        'category-history': "url('/src/assets/categories/historia.jpg')",
        'category-mistery': "url('/src/assets/categories/misterio.jpg')",
        'category-musical': "url('/src/assets/categories/musical.jpg')",
        'category-romance': "url('/src/assets/categories/romance.jpg')",
        'category-horror': "url('/src/assets/categories/terror.jpg')",
        'gradient-principal':
          'linear-gradient(45deg, rgba(254,213,2,1) 0%, rgba(173,40,49,1) 100%)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        darkBlue: '#000D14',
        semiDarkBlue: '#011b27',
        darkRed: '#AD2831',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'show-up': {
          from: { opacity: 0, transform: 'translateY(50px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        },
        'show-opacity': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'showing-up': 'show-up forwards 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        'showing-opacity':
          'show-opacity forwards 1000ms cubic-bezier(0.22, 1, 0.36, 1)',
      },
      spacing: {
        'grid-width': '59rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

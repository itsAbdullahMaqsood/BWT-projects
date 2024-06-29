/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        Softred: 'hsl(7, 99%, 70%)',
        Yellow: 'hsl(51, 100%, 49%)',
        Darkdesaturatedcyan : 'hsl(167, 40%, 24%)',
        Darkblue : 'hsl(198, 62%, 26%)',
        Darkmoderatecyan: 'hsl(168, 34%, 41%)',
        LightModeratecyan: 'hsl(168, 47%, 70%)'
      },
      fontFamily: {
        'Fraunces': ['Fraunces', 'sans-serif'],
        'Barlow': ['Barlow', 'serif'],
      },
      fontSize: {
        'responsive-lg': 'clamp(1rem, 2vw + 1rem, 3rem)',
        'responsive-md': 'clamp(1rem, 2vw + 1rem, 2.25rem)',
        'responsive-sm': 'clamp(0.7rem, 2vw + 1rem, 0.9rem)',
        'responsive-xsm': 'clamp(0.5rem, 2vw + 1rem, 0.9rem)',
      },
      screens: {
        
        'sm': '425px',
        'md': '768px',
        'xmd': '850px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}


module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
      },
      dropShadow: {
        'glow': [
          '0 4px 6px rgba(0, 0, 0, 0.12)',
          '0 2px 60px rgba(241, 255, 188, 0.7)',
        ],
      },
      maxWidth: {
        '2xs': '18rem' // 288px
      },
    },
    colors: {
      'current': 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'mimosa': '#F1FFBC',
      'iceberg': '#CDF1EA',
      'pink': '#E80070',
      'light-pink': '#EDBBD2',
      'orange': '#FC895B',
      'smoke': '#3A3A4E',
      'dark-gray': '#717173',
      'dark-gray-new': '#7E7E81',
      'dark-gray-ish': '#94949f', // #9898A6 in designs but wasn't accessible on white
      'gray': '#DEDEE2',
      'light-gray': '#F7F7F9',
    },
    fontFamily: {
      'sailec': ['Sailec, sans-serif'],
      'tiempos': ['Tiempos, serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '3.5xl': '2rem', // 32px
      '4xl': '2.125rem', // 34px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1035px',
    },
  },
  // Remove Tailwind features that have been added to recent versions
  // but are unused _and_ take up uneccessary space in output CSS
  corePlugins: {
    'backdropBlur': false,
    'backdropBrightness': false,
    'backdropContrast': false,
    'backdropFilter': false,
    'backdropGrayscale': false,
    'backdropHueRotate': false,
    'backdropInvert': false,
    'backdropOpacity': false,
    'backdropSaturate': false,
    'backdropSepia': false,
    'filter': false,
    'ringColor': false,
    'ringOffsetColor': false,
    'ringOffsetWidth': false,
    'ringOpacity': false,
    'ringWidth': false,
  },
};

module.exports = {
  content: [
    './src/app/**/*.js',
    './src/components/**/*.js',
    './src/references/**/*.js',
    './src/utils/**/*.js',
  ],
  safelist: [
    'text-center',
    'pt-8'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'auto-fill-2up': 'repeat(auto-fill, minmax(286px, 1fr))',
        'auto-fill-3up': 'repeat(auto-fill, minmax(286px, 1fr))',
      },
    },
  },
  plugins: [],
}

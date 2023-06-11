/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}',],
  theme: {
    fontSize: {
      'title1': ['3rem', {
        fontWeight: 700,
      }],
      'title2': ['2.5rem', {
        fontWeight: 700,
      }],
      'title3': ['2rem', {
        fontWeight: 700,
      }],
      'subtitle': ['1.5rem', {
        fontWeight: 500,
      }],
      'boldBody': ['1rem', {
        fontWeight: 600,
      }],
      'bodyText': ['1rem', {
        fontWeight: 400,
      }],
      'smallTextBold': ['.875rem', {
        fontWeight: 600,
      }],
      'smallText': ['.875rem', {
        fontWeight: 400,
      }],
      'preTextB': ['.75rem', {
        fontWeight: 600,
      }],
      'preText': ['.75rem', {
        fontWeight: 400,
      }],
    },
    colors: {
      'dark-60': '#131313',
      'dark-40': '#767474',
      'dark-30': '#DCDCDC',
      'dark-20': '#F4F4F4',
      'blue-primary': '#1D6DEC',
      'pink-primary': '#EF355E',
      'success': '#3CCF4E',
      'error': '#E30815',
      'alert': '#FAB95B',
      'blue-secondary': '#4359F1',
      'pink-secondary': '#FF7168',
      'yellow-primary': '#FFA466',
      'purple-primary': '#6445F1',
    },
    maxWidth: {
      'w-body': '90rem',
      'w-table': '57.5rem',
      'w-sideInfo': '19.25rem',
      'w-modalCard': '16.5rem',
    },
    fontFamily: {
      'Inter': ['Inter'],
     }
}
}

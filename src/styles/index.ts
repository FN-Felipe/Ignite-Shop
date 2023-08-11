import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      
      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray400: '#8D8D99',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00b37e',
      green500: '#00875f',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})
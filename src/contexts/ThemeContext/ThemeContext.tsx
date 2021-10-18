import { ThemeProvider as Provider } from 'styled-components'

import type { ThemeProviderProps } from './ThemeContext.types'

const colors = {
  black: '#000',
  blue: '#041549',
  gray: '#f3f4f6',
  grayDark: '#374151',
  red: 'crimson',
  teal: '#35D0BA',
  white: '#fff',
  yellow: 'goldenrod',
}

const theme = {
  colors: {
    background: colors.white,
    black: colors.black,
    blue: colors.blue,
    error: colors.red,
    gray: colors.gray,
    grayDark: colors.grayDark,
    red: colors.red,
    teal: colors.teal,
    warning: colors.yellow,
    white: colors.white,
    yellow: colors.yellow,
  },
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <Provider theme={theme}>{children}</Provider>
}

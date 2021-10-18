import { DefaultTheme, ThemeProvider as Provider } from 'styled-components'

import type { ThemeProviderProps } from './ThemeContext.types'

const colors: Pick<
  DefaultTheme['colors'],
  'black' | 'blue' | 'gray' | 'grayDark' | 'teal' | 'white'
> = {
  black: '#000',
  blue: '#041549',
  gray: '#f3f4f6',
  grayDark: '#374151',
  teal: '#35D0BA',
  white: '#fff',
}

const theme: DefaultTheme = {
  colors: {
    background: colors.white,
    black: colors.black,
    blue: colors.blue,
    gray: colors.gray,
    grayDark: colors.grayDark,
    teal: colors.teal,
    white: colors.white,
  },
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <Provider theme={theme}>{children}</Provider>
}

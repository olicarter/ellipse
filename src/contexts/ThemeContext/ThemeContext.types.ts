import type { ReactNode } from 'react'

export const COLOR_NAMES = [
  'background',
  'black',
  'blue',
  'gray',
  'grayDark',
  'teal',
  'white',
] as const

export type ThemeProviderProps = {
  children: ReactNode
}

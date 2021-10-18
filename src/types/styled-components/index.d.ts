import 'styled-components'
import type { COLOR_NAMES } from 'src/contexts'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key in typeof COLOR_NAMES[number]]: string
    }
  }
}

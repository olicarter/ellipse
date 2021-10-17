import 'styled-components'

declare module 'styled-components' {
  type ColorName =
    | 'background'
    | 'black'
    | 'blue'
    | 'error'
    | 'gray'
    | 'grayDark'
    | 'red'
    | 'teal'
    | 'warning'
    | 'white'
    | 'yellow'

  export interface DefaultTheme {
    colors: {
      [key in ColorName]: string
    }
  }
}

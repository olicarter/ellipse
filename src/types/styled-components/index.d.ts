import 'styled-components'

declare module 'styled-components' {
  type ColorName =
    | 'background'
    | 'black'
    | 'blue'
    | 'gray'
    | 'grayDark'
    | 'teal'
    | 'white'

  export interface DefaultTheme {
    colors: {
      [key in ColorName]: string
    }
  }
}

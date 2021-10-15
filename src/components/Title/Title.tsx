import type { TitleProps } from './Title.types'
import * as Styled from './Title.styled'

export function Title({ children }: TitleProps) {
  return <Styled.Title>{children}</Styled.Title>
}

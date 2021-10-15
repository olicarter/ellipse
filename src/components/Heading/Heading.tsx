import type { HeadingProps } from './Heading.types'
import * as Styled from './Heading.styled'

export function Heading({ children }: HeadingProps) {
  return <Styled.Heading>{children}</Styled.Heading>
}

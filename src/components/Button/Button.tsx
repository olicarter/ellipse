import type { ButtonProps } from './Button.types'
import * as Styled from './Button.styled'

export function Button({ children, isSelected = false, onClick }: ButtonProps) {
  return (
    <Styled.Button isSelected={isSelected} onClick={onClick}>
      {children}
    </Styled.Button>
  )
}

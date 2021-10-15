import type { ModalProps } from './Modal.types'
import * as Styled from './Modal.styled'

export function Modal({ children, visible }: ModalProps) {
  return (
    <Styled.Wrapper>
      <Styled.Backdrop />

      <Styled.Modal>{children}</Styled.Modal>
    </Styled.Wrapper>
  )
}

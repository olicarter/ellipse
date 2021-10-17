import { AnimatePresence } from 'framer-motion'
import { useLockBodyScroll } from 'react-use'

import type { ModalProps } from './Modal.types'
import * as Styled from './Modal.styled'

export function Modal({ children, visible }: ModalProps) {
  useLockBodyScroll(visible)

  return (
    <AnimatePresence>
      {visible && (
        <Styled.Wrapper>
          <Styled.Backdrop
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <Styled.Modal
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            {children}
          </Styled.Modal>
        </Styled.Wrapper>
      )}
    </AnimatePresence>
  )
}

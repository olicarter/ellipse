import styled from 'styled-components'
import { transparentize } from 'polished'

export const Wrapper = styled.div({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
})

export const Backdrop = styled.div(
  ({
    theme: {
      colors: { black },
    },
  }) => ({
    background: transparentize(0.8, black),
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  }),
)

export const Modal = styled.div(
  ({
    theme: {
      colors: { white },
    },
  }) => ({
    backgroundColor: white,
    borderRadius: '1rem',
    maxWidth: '480px',
    padding: '1rem',
    width: '100%',
    zIndex: 1,
  }),
)

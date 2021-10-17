import styled from 'styled-components'
import { motion } from 'framer-motion'
import { transparentize } from 'polished'

export const Wrapper = styled.div({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  padding: '4vmin',
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 1,
})

export const Backdrop = styled(motion.div)(
  ({
    theme: {
      colors: { black },
    },
  }) => ({
    backdropFilter: 'blur(1rem)',
    background: transparentize(0.5, black),
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  }),
)

export const Modal = styled(motion.div)(
  ({
    theme: {
      colors: { white },
    },
  }) => ({
    backgroundColor: white,
    borderRadius: '1rem',
    maxWidth: '640px',
    padding: '4vmin',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  }),
)

import styled from 'styled-components'
import { transparentize } from 'polished'

export const Box = styled.div(
  ({
    theme: {
      colors: { grayDark, white },
    },
  }) => ({
    background: transparentize(0.5, white),
    border: '3px solid',
    borderColor: grayDark,
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '4vmin',
  }),
)

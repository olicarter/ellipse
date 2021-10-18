import styled from 'styled-components'
import { readableColor } from 'polished'

export const Header = styled.header(
  ({
    theme: {
      colors: { gray },
    },
  }) => ({
    alignItems: 'center',
    background: gray,
    borderRadius: '100px',
    color: readableColor(gray),
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
  }),
)

export const IconButton = styled.button(
  ({
    theme: {
      colors: { blue },
    },
  }) => ({
    alignItems: 'center',
    appearance: 'none',
    background: blue,
    border: 'none',
    borderRadius: '50%',
    color: readableColor(blue),
    cursor: 'pointer',
    display: 'flex',
    height: '3rem',
    justifyContent: 'center',
    width: '3rem',
  }),
)

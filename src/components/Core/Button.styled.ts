import styled from 'styled-components'
import { readableColor } from 'polished'

export const Button = styled.button<{ disabled?: boolean }>(
  ({
    disabled = false,
    theme: {
      colors: { blue },
    },
  }) => ({
    alignItems: 'center',
    background: blue,
    border: 'none',
    borderRadius: '100px',
    color: readableColor(blue),
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 500,
    height: '64px',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    padding: '0.5rem 1rem',
    userSelect: 'none',
  }),
)

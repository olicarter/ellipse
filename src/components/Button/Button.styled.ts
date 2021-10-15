import styled from 'styled-components'
import { lighten, readableColor } from 'polished'

import type { ButtonProps } from './Button.types'

export const Button = styled.button<Pick<ButtonProps, 'isSelected'>>(
  ({
    isSelected,
    theme: {
      colors: { grayDark, teal },
    },
  }) => ({
    appearance: 'none',
    background: teal,
    border: '2px solid transparent',
    borderRadius: '0.25rem',
    color: readableColor(teal),
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    opacity: isSelected ? 1 : 0.5,
    padding: '1rem',
    '@media (hover: hover) and (pointer: fine)': {
      ':hover': {
        background: lighten(0.1, teal),
        // borderColor: grayDark,
        color: readableColor(lighten(0.1, teal)),
        opacity: 1,
      },
    },
  }),
)

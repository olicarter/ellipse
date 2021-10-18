import styled from 'styled-components'
import { darken, readableColor, lighten } from 'polished'

export const Toggle = styled.div<{ active?: boolean }>(
  ({
    active,
    theme: {
      colors: { gray, blue },
    },
  }) => ({
    alignItems: 'center',
    background: active ? lighten(0.75, blue) : gray,
    border: '3px solid',
    borderColor: active ? blue : darken(0.1, gray),
    borderRadius: '100px',
    color: readableColor(active ? lighten(0.75, blue) : gray),
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 500,
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    '>:first-child': {
      marginRight: active ? '0.5rem' : 0,
    },
  }),
)

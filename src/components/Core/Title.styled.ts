import styled from 'styled-components'
import { readableColor } from 'polished'

export const Title = styled.h1(
  ({
    theme: {
      colors: { background },
    },
  }) => ({
    color: readableColor(background),
    fontSize: '3rem',
    margin: '2rem 0',
    padding: 0,
  }),
)

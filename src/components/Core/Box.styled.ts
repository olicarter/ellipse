import styled from 'styled-components'

export const Box = styled.div(
  ({
    theme: {
      colors: { grayDark, white },
    },
  }) => ({
    background: white,
    border: '3px solid',
    borderColor: grayDark,
    borderRadius: '1rem',
    padding: '4vmin',
  }),
)

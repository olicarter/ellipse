import styled from 'styled-components'

export const Heading = styled.h3(
  ({
    theme: {
      colors: { black },
    },
  }) => ({
    color: black,
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '0 0 1rem',
    padding: 0,
  }),
)

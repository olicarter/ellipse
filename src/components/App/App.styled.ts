import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle(
  ({
    theme: {
      colors: { background },
    },
  }) => ({
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'system-ui, sans-serif',
    },
    body: {
      background,
      margin: 0,
      padding: '4vmin',
    },
  }),
)

export const Centered = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

export const Main = styled.main({
  maxWidth: '800px',
  width: '100%',
})

export const Box = styled.div(
  ({
    theme: {
      colors: { white },
    },
  }) => ({
    background: white,
    borderRadius: '0.5rem',
    padding: '1rem',
  }),
)

export const Options = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

import styled, { createGlobalStyle } from 'styled-components'

import { Box } from 'src/components/Core'

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
      overflow: 'hidden',
    },
    '#root': {
      height: '100vh',
      overflow: 'auto',
    },
  }),
)

export const Centered = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

export const FilterBox = styled(Box)<{ isSticky: boolean }>(({ isSticky }) => ({
  alignSelf: 'flex-start',
  ...(isSticky && { position: 'sticky', top: '4vmin' }),
}))

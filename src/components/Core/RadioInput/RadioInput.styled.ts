import styled from 'styled-components'
import { darken, readableColor, lighten } from 'polished'

export const Option = styled.div<{
  active: boolean
  onClick: () => void
}>(
  ({
    active,
    theme: {
      colors: { gray, blue },
    },
  }) => {
    const backgroundColor = active ? lighten(0.75, blue) : gray

    return {
      alignItems: 'center',
      border: '3px solid',
      borderColor: active ? blue : darken(0.1, gray),
      backgroundColor,
      borderRadius: '0.5rem',
      color: readableColor(backgroundColor),
      cursor: 'pointer',
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: 'auto 1fr',
      padding: '1rem 1rem 1rem 0.5rem',
      userSelect: 'none',
    }
  },
)

export const Input = styled.input(() => ({
  margin: '0.5rem',
}))

export const Heading = styled.h3({
  fontSize: '1rem',
  lineHeight: 1,
  margin: '0 0 0.5rem',
})

export const Description = styled.p({
  fontSize: '0.9rem',
  lineHeight: 1.4,
  margin: 0,
})

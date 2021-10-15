import styled from 'styled-components'
import { darken } from 'polished'

import type { RadioInputProps } from './RadioInput.types'

export const Option = styled.div<
  Pick<RadioInputProps, 'checked'> & { onClick: () => void }
>(
  ({
    checked,
    theme: {
      colors: { gray, grayDark },
    },
  }) => ({
    alignItems: 'center',
    border: `2px solid ${checked ? grayDark : darken(0.1, gray)}`,
    background: gray,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: 'auto 1fr',
    marginBottom: '1rem',
    padding: '0.5rem',
    userSelect: 'none',
  }),
)

export const Input = styled.input(() => ({
  margin: '0.5rem',
}))

export const Heading = styled.h3({
  lineHeight: 1,
  margin: '0 0 0.5rem',
})

export const Description = styled.p({
  fontSize: '0.9rem',
  lineHeight: 1.4,
  margin: 0,
})

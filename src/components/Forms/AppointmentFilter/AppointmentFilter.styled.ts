import styled from 'styled-components'
import { readableColor } from 'polished'

import { Button } from 'src/components/Core'

export const Options = styled.div({
  display: 'grid',
  gap: '1rem',
})

export const Topics = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-0.5rem',
})

export const UnselectSpecialismsButton = styled(Button)(
  ({
    theme: {
      colors: { blue },
    },
  }) => ({
    alignItems: 'center',
    background: blue,
    border: '3px solid',
    borderColor: blue,
    borderRadius: '100px',
    color: readableColor(blue),
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 500,
    height: '40px',
    justifyContent: 'center',
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    userSelect: 'none',
  }),
)

import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const AppointmentMedium = styled.div<{ active?: boolean }>(
  ({
    active,
    theme: {
      colors: { gray, blue },
    },
  }) => ({
    alignItems: 'center',
    border: '3px solid',
    borderColor: active ? blue : darken(0.1, gray),
    background: active ? lighten(0.75, blue) : gray,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0.5rem',
    userSelect: 'none',
  }),
)

export const Icon = styled.div({
  display: 'flex',
  flex: 0,
  marginRight: '0.5rem',
  width: '100%',
})

export const Heading = styled.h3({
  fontSize: '1rem',
  lineHeight: 1,
  margin: 0,
  textTransform: 'capitalize',
})

import styled, { createGlobalStyle } from 'styled-components'
import { darken, readableColor, lighten } from 'polished'

import { Box, Button } from 'src/components/Core'

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

export const Options = styled.div({
  display: 'grid',
  gap: '1rem',
})

export const CommunicationOptions = styled.div({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '1fr 1fr',
})

export const CommunicationOption = styled.div<{ active?: boolean }>(
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
  }),
)

export const CommunicationOptionIcon = styled.div({
  display: 'flex',
  flex: 0,
  marginRight: '0.5rem',
  width: '100%',
})

export const CommunicationOptionHeading = styled.h3({
  fontSize: '1rem',
  lineHeight: 1,
  margin: 0,
  textTransform: 'capitalize',
})

export const Topics = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-0.5rem',
})

export const Topic = styled.div<{ active?: boolean }>(
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

export const ClearSpecialismsButton = styled(Topic)(
  ({
    theme: {
      colors: { blue },
    },
  }) => ({
    alignItems: 'center',
    background: blue,
    borderColor: blue,
    color: readableColor(blue),
    display: 'flex',
    justifyContent: 'center',
  }),
)

export const BookAppointmentButton = styled(Button)({ width: '100%' })

import styled from 'styled-components'
import { darken, lighten, readableColor, transparentize } from 'polished'

export const Heading = styled.h3({
  margin: '0 0 1rem',
})

export const AppointmentTime = styled.div<{ active: boolean }>(
  ({
    active,
    theme: {
      colors: { blue, gray },
    },
  }) => ({
    background: active ? lighten(0.75, blue) : gray,
    border: '3px solid',
    borderColor: active ? blue : darken(0.1, gray),
    borderRadius: '100px',
    color: readableColor(active ? lighten(0.75, blue) : gray),
    cursor: 'pointer',
    display: 'flex',
    padding: '0.5rem',
    userSelect: 'none',
  }),
)

export const Avatar = styled.img({
  height: '3rem',
  borderRadius: '1.5rem',
  objectFit: 'cover',
  width: '3rem',
})

export const Info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '0.5rem',
})

export const Time = styled.span({
  fontWeight: 600,
})

export const CounsellorName = styled.span<{ active: boolean }>(
  ({
    active,
    theme: {
      colors: { blue, gray },
    },
  }) => ({
    color: transparentize(
      0.33,
      readableColor(active ? lighten(0.75, blue) : gray),
    ),
    fontSize: '0.9rem',
  }),
)

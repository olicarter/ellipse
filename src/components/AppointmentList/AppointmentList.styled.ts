import styled from 'styled-components'
import { readableColor } from 'polished'

export const Header = styled.header(
  ({
    theme: {
      colors: { gray },
    },
  }) => ({
    alignItems: 'center',
    background: gray,
    borderRadius: '100px',
    color: readableColor(gray),
    display: 'flex',
    justifyContent: 'space-between',
  }),
)

export const Heading = styled.h3({
  margin: '0 0 1rem',
})

export const AppointmentTime = styled.div(
  ({
    theme: {
      colors: { gray },
    },
  }) => ({
    background: gray,
    borderRadius: '100px',
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

export const CounsellorName = styled.span(
  ({
    theme: {
      colors: { grayDark },
    },
  }) => ({
    color: grayDark,
    fontSize: '0.9rem',
  }),
)

export const IconButton = styled.button(
  ({
    theme: {
      colors: { blue },
    },
  }) => ({
    alignItems: 'center',
    appearance: 'none',
    background: blue,
    border: 'none',
    borderRadius: '50%',
    color: readableColor(blue),
    cursor: 'pointer',
    display: 'flex',
    height: '3rem',
    justifyContent: 'center',
    width: '3rem',
  }),
)

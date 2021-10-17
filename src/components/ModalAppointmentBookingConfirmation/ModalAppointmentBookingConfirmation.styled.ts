import styled from 'styled-components'

export const CounsellorAvatar = styled.img({
  borderRadius: '50%',
  height: '10rem',
  left: '75%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  transform: 'translate(-50%, -50%)',
  width: '10rem',
})

export const WarningMessage = styled.span(
  ({
    theme: {
      colors: { teal },
    },
  }) => ({
    color: teal,
    fontWeight: 600,
  }),
)

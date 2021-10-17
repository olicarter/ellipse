import styled from 'styled-components'

export const FormGroup = styled.section<{ grow?: boolean }>(
  ({ grow = false }) => ({
    flexGrow: grow ? 1 : 0,
    ':not(:last-child)': { marginBottom: '3rem' },
  }),
)

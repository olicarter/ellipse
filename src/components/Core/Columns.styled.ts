import styled, { CSSProperties } from 'styled-components'

export const Columns = styled.div<{
  columns?: number
  gap?: CSSProperties['gap']
  minWidth?: CSSProperties['minWidth']
}>(({ columns, gap = '1rem', minWidth = '0px' }) => ({
  display: 'grid',
  gap,
  gridTemplateColumns: columns
    ? `repeat(${columns}, 1fr)`
    : `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
}))

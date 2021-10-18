import { useMedia } from 'react-use'

import { Box, Columns, Main } from 'src/components/Core'
import { AnimatedBackground } from 'src/components/AnimatedBackground'
import { Forms } from 'src/components/Forms'

import * as Styled from './App.styled'

export function App() {
  const isWideViewport = useMedia('(min-width: 1080px)')

  return (
    <>
      <Styled.Global />

      <AnimatedBackground />

      <Styled.Centered>
        <Main>
          <Columns columns={isWideViewport ? 2 : 1} gap="4vmin">
            <Styled.FilterBox isSticky={isWideViewport}>
              <Forms.AppointmentFilter />
            </Styled.FilterBox>

            <Box>
              <Forms.AppointmentSelect />
            </Box>
          </Columns>
        </Main>
      </Styled.Centered>
    </>
  )
}

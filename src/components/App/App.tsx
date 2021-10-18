import { useHistory } from 'react-router-dom'
import sortBy from 'lodash.sortby'
import { useMedia } from 'react-use'

import { useQueryParams } from 'src/hooks'
import { Box, Columns, Main } from 'src/components/Core'
import { AnimatedBackground } from 'src/components/AnimatedBackground'
import { Forms } from 'src/components/Forms'
import availabilityMock from 'src/availability-mock.json'

import * as Styled from './App.styled'

// Get earliest date from mock availability date
const today = sortBy(Object.values(availabilityMock).flat(), 'datetime')[0]
  .datetime

export function App() {
  const { push } = useHistory()
  const query = useQueryParams()

  const isWideViewport = useMedia('(min-width: 1080px)')

  if (!query.get('date')) {
    query.set('date', today)
    push(`?${query.toString()}`)
  }

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

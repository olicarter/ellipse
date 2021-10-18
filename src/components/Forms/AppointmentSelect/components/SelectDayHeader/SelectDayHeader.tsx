import { useHistory } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { addDays, format, formatISO, parseISO, subDays } from 'date-fns'
import sortBy from 'lodash.sortby'

import { useQueryParams } from 'src/hooks'
import availabilityMock from 'src/availability-mock.json'

import * as Styled from './SelectDayHeader.styled'

// Get earliest date from mock availability date
const { datetime: today } = sortBy(
  Object.values(availabilityMock).flat(),
  'datetime',
)[0]

export function SelectDayHeader() {
  const { push } = useHistory()
  const query = useQueryParams()

  const selectedDate = query.get('date')

  if (!selectedDate) {
    query.set('date', today)
    push(`?${query.toString()}`)
    return null
  }

  return (
    <Styled.Header>
      <Styled.IconButton
        onClick={() => {
          query.set('date', formatISO(subDays(parseISO(selectedDate), 1)))
          push(`?${query.toString()}`)
        }}
      >
        <Icon path={mdiChevronLeft} size={1.25} />
      </Styled.IconButton>

      <b>{format(parseISO(selectedDate), 'PPPP')}</b>

      <Styled.IconButton
        onClick={() => {
          query.set('date', formatISO(addDays(parseISO(selectedDate), 1)))
          push(`?${query.toString()}`)
        }}
      >
        <Icon path={mdiChevronRight} size={1.25} />
      </Styled.IconButton>
    </Styled.Header>
  )
}

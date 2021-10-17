import { useHistory } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { addDays, format, formatISO, parseISO, subDays } from 'date-fns'

import { useQueryParams } from 'src/hooks'
import { FormGroup } from 'src/components/Core'

import * as Styled from './SelectDayHeader.styled'

export function SelectDayHeader() {
  const { push } = useHistory()
  const query = useQueryParams()

  const selectedDate = query.get('date')

  if (!selectedDate) return null

  return (
    <FormGroup>
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
    </FormGroup>
  )
}

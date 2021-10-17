import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import uniqBy from 'lodash.uniqby'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import {
  addDays,
  addHours,
  format,
  formatISO,
  parseISO,
  subDays,
} from 'date-fns'

import { useQueryParams } from 'src/hooks'
import { FormGroup } from 'src/components/Core'

import { GetAppointmentsData } from './AppointmentList.types'
import { queries } from './AppointmentList.gql'
import * as Styled from './AppointmentList.styled'

export function AppointmentList() {
  const { push } = useHistory()
  const query = useQueryParams()

  const selectedDate = query.get('date')
  const selectedMedia = query.getAll('medium')
  const selectedSpecialisms = query.getAll('specialism')
  const selectedType = query.get('type')

  const { data } = useQuery<GetAppointmentsData>(queries.GET_APPOINTMENTS, {
    variables: {
      filter: {
        date: selectedDate,
        media: selectedMedia,
        specialisms: selectedSpecialisms,
        type: selectedType,
      },
      orderBy: 'startsAt',
    },
  })
  const appointments = data?.appointments || []
  const uniqueAppointments = uniqBy(appointments, 'startsAt')

  if (!selectedDate) return null

  return (
    <>
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

      <div style={{ display: 'grid', gap: '1rem' }}>
        {uniqueAppointments.map(
          ({ id, counsellor: { avatar, firstName, lastName }, startsAt }) => (
            <Styled.AppointmentTime key={id}>
              <Styled.Avatar src={avatar} />
              <Styled.Info>
                <Styled.Time>
                  {format(new Date(startsAt), 'haaa')}-
                  {format(addHours(new Date(startsAt), 1), 'haaa')}
                </Styled.Time>

                <Styled.CounsellorName>
                  {firstName} {lastName}
                </Styled.CounsellorName>
              </Styled.Info>
            </Styled.AppointmentTime>
          ),
        )}
      </div>
    </>
  )
}

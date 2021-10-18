import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import uniqBy from 'lodash.uniqby'
import { addHours, format } from 'date-fns'

import { useQueryParams } from 'src/hooks'

import { GetAppointmentsData } from './AppointmentList.types'
import { queries } from './AppointmentList.gql'
import * as Styled from './AppointmentList.styled'

export function AppointmentList() {
  const { push } = useHistory()
  const query = useQueryParams()

  const selectedAppointment = query.get('appointment')
  const selectedDate = query.get('date')
  const selectedAppointmentMedium = query.get('medium')
  const selectedSpecialisms = query.getAll('specialism')
  const selectedType = query.get('type')

  const { data } = useQuery<GetAppointmentsData>(queries.GET_APPOINTMENTS, {
    variables: {
      filter: {
        date: selectedDate,
        medium: selectedAppointmentMedium,
        specialisms: selectedSpecialisms,
        type: selectedType,
      },
      orderBy: 'startsAt',
    },
  })
  const appointments = uniqBy(data?.appointments, 'startsAt')
  const appointmentIDs = JSON.stringify(appointments.map(({ id }) => id))

  useEffect(() => {
    if (selectedAppointment && !appointmentIDs.includes(selectedAppointment)) {
      query.delete('appointment')
      push(`?${query.toString()}`)
    }
  }, [appointmentIDs, push, query, selectedAppointment])

  if (!selectedDate) return null

  return (
    <>
      {appointments.length ? (
        <Styled.Appointments>
          {appointments.map(
            ({ id, counsellor: { avatar, firstName, lastName }, startsAt }) => (
              <Styled.Appointment
                key={id}
                active={selectedAppointment === id}
                onClick={() => {
                  if (selectedAppointment === id) query.delete('appointment')
                  else query.set('appointment', id)
                  push(`?${query.toString()}`)
                }}
              >
                <Styled.Avatar src={avatar} />

                <Styled.Info>
                  <Styled.Time>
                    {format(new Date(startsAt), 'haaa')}-
                    {format(addHours(new Date(startsAt), 1), 'haaa')}
                  </Styled.Time>

                  <Styled.CounsellorName active={selectedAppointment === id}>
                    {firstName} {lastName}
                  </Styled.CounsellorName>
                </Styled.Info>
              </Styled.Appointment>
            ),
          )}
        </Styled.Appointments>
      ) : (
        <div style={{ textAlign: 'center' }}>No appointments found</div>
      )}
    </>
  )
}

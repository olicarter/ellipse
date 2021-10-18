import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { APPOINTMENT_MEDIA, APPOINTMENT_TYPES } from 'src/types'
import { useQueryParams } from 'src/hooks'
import { Columns, FormGroup, Heading } from 'src/components/Core'
import { FormControls } from 'src/components/FormControls'
import { RadioInput } from 'src/components/RadioInput'

import { GetSpecialismsData } from './AppointmentFilter.types'
import { queries } from './AppointmentFilter.gql'
import * as Styled from './AppointmentFilter.styled'

export function AppointmentFilter() {
  const { push } = useHistory()
  const query = useQueryParams()

  const { data } = useQuery<GetSpecialismsData>(queries.GET_SPECIALISMS)
  const specialisms = data?.specialisms || []

  const selectedSpecialisms = query.getAll('specialism')
  const selectedAppointmentType = query.get('type')

  return (
    <>
      <FormGroup>
        <Heading>What type of appointment do you need?</Heading>

        <Styled.Options>
          {APPOINTMENT_TYPES.map(type => {
            const description = (() => {
              switch (type) {
                case 'consultation':
                  return "If you've never had a therapy session with Spill before, select this option. A consultation is a short meeting that will help us tailor future sessions to your needs."
                case 'one_off':
                  return "Book a single session with one of our accredited therapists. There's no obligation to attend multiple sessions, but you can come back and book more if you need."
              }
            })()

            return (
              <RadioInput
                checked={selectedAppointmentType === type}
                description={description}
                heading={type}
                name="type"
                onSelect={() => {
                  query.set('type', type)
                  push(`?${query.toString()}`)
                }}
              />
            )
          })}
        </Styled.Options>
      </FormGroup>

      <FormGroup>
        <Heading>How would you like to communicate?</Heading>

        <Columns columns={APPOINTMENT_MEDIA.length} gap="1rem">
          {APPOINTMENT_MEDIA.map(medium => (
            <FormControls.AppointmentMedium key={medium} medium={medium} />
          ))}
        </Columns>
      </FormGroup>

      <FormGroup>
        <Heading>What topics would you like to discuss?</Heading>

        <Styled.Topics>
          {specialisms.map(({ id }) => (
            <FormControls.AppointmentSpecialism key={id} id={id} />
          ))}

          {!!selectedSpecialisms.length && (
            <Styled.UnselectSpecialismsButton
              onClick={() => {
                query.delete('specialism')
                push(`?${query.toString()}`)
              }}
            >
              Unselect all topics
            </Styled.UnselectSpecialismsButton>
          )}
        </Styled.Topics>
      </FormGroup>
    </>
  )
}

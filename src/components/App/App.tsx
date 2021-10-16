import { useHistory } from 'react-router-dom'
import { mdiForum, mdiPhone, mdiVideo } from '@mdi/js'
import { useQuery } from '@apollo/client'

import { useQueryParams } from 'src/hooks'
import { Box, Columns } from 'src/components/Core'
import { AppointmentMedium } from 'src/components/AppointmentMedium'
import { AppointmentSpecialism } from 'src/components/AppointmentSpecialism'
import { Heading } from 'src/components/Heading'
import { RadioInput } from 'src/components/RadioInput'
import { Title } from 'src/components/Title'

import { GetSpecialismsData } from './App.types'
import { queries } from './App.gql'
import * as Styled from './App.styled'

const mediums = [
  { icon: mdiForum, type: 'chat' },
  { icon: mdiPhone, type: 'phone' },
  { icon: mdiVideo, type: 'video' },
]

export function App() {
  const { push } = useHistory()
  const query = useQueryParams()

  const { data } = useQuery<GetSpecialismsData>(queries.GET_SPECIALISMS)
  const specialisms = data?.specialisms || []

  const selectedSpecialisms = query.getAll('specialism')
  const type = query.get('type')

  return (
    <>
      <Styled.Global />

      <Styled.Centered>
        <Styled.Main>
          <Title>Book an appointment</Title>

          <Columns gap="4vmin" minWidth="480px">
            <Box>
              <Styled.FormGroup>
                <Heading>What type of appointment do you need?</Heading>

                <Styled.Options>
                  <RadioInput
                    checked={type === 'consultation'}
                    description="If you've never had a therapy session with Spill before, select this option. A consultation is a short meeting that will help us tailor future sessions to your needs."
                    heading="Consultation"
                    name="type"
                    onSelect={() => {
                      query.set('type', 'consultation')
                      push(`?${query.toString()}`)
                    }}
                  />

                  <RadioInput
                    checked={type === 'one_off'}
                    description="Book a single session with one of our accredited therapists. There's no obligation to attend multiple sessions, but you can come back and book more if you need."
                    heading="One-off"
                    name="type"
                    onSelect={() => {
                      query.set('type', 'one_off')
                      push(`?${query.toString()}`)
                    }}
                  />
                </Styled.Options>
              </Styled.FormGroup>

              <Styled.FormGroup>
                <Heading>How would you like to communicate?</Heading>

                <Columns columns={mediums.length} gap="1rem">
                  {mediums.map(medium => (
                    <AppointmentMedium icon={medium.icon} type={medium.type} />
                  ))}
                </Columns>
              </Styled.FormGroup>

              <Styled.FormGroup>
                <Heading>What topics would you like to discuss?</Heading>

                <Styled.Topics>
                  {specialisms.map(({ id }) => (
                    <AppointmentSpecialism key={id} id={id} />
                  ))}

                  {!!selectedSpecialisms.length && (
                    <Styled.ClearSpecialismsButton
                      onClick={() => {
                        query.delete('specialism')
                        push(`?${query.toString()}`)
                      }}
                    >
                      Unselect all topics
                    </Styled.ClearSpecialismsButton>
                  )}
                </Styled.Topics>
              </Styled.FormGroup>
            </Box>

            <Box>
              <Styled.FormGroup>
                <Heading>
                  These are our available consultants, matching your criteria
                </Heading>
              </Styled.FormGroup>
            </Box>
          </Columns>
        </Styled.Main>
      </Styled.Centered>
    </>
  )
}

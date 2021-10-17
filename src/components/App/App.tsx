import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import sortBy from 'lodash.sortby'
import { useIntersection, useMedia, useWindowSize } from 'react-use'
import Particles from 'react-particles-js'
import { useTheme } from 'styled-components'

import { useQueryParams } from 'src/hooks'
import { Box, Columns, FormGroup, Main } from 'src/components/Core'
import { AppointmentList } from 'src/components/AppointmentList'
import { AppointmentMediaControl } from 'src/components/AppointmentMediaControl'
import { AppointmentSpecialism } from 'src/components/AppointmentSpecialism'
import { Heading } from 'src/components/Heading'
import { ModalAppointmentBookingConfirmation } from 'src/components/ModalAppointmentBookingConfirmation'
import { RadioInput } from 'src/components/RadioInput'
import { SelectDayHeader } from 'src/components/SelectDayHeader'
import availabilityMock from 'src/availability-mock.json'

import { GetSpecialismsData } from './App.types'
import { queries } from './App.gql'
import * as Styled from './App.styled'

// Get earliest date from mock availability date
const today = sortBy(Object.values(availabilityMock).flat(), 'datetime')[0]
  .datetime

export function App() {
  const { push } = useHistory()
  const query = useQueryParams()

  const {
    colors: { gray, teal },
  } = useTheme()

  const confirmationButtonRef = useRef(null)

  const { height: windowHeight, width: windowWidth } = useWindowSize()
  const isLargeScreen = useMedia('(min-width: 1080px)')
  const intersection = useIntersection(confirmationButtonRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  const confirmationButtonObscured =
    intersection && intersection.intersectionRatio < 1

  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false)

  const { data } = useQuery<GetSpecialismsData>(queries.GET_SPECIALISMS)
  const specialisms = data?.specialisms || []

  const selectedSpecialisms = query.getAll('specialism')
  const selectedAppointmentType = query.get('type')

  if (!query.get('date')) {
    query.set('date', today)
    push(`?${query.toString()}`)
  }

  return (
    <>
      <Styled.Global />

      <Particles
        height={`${windowHeight}px`}
        params={{
          particles: {
            number: { value: 3 },
            color: { value: [gray, teal] },
            shape: { type: 'circle' },
            opacity: { value: 1, anim: { enable: false } },
            size: { value: { min: 50, max: 300 } },
            move: {
              enable: true,
              speed: 2,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        }}
        style={{ left: 0, position: 'fixed', top: 0, zIndex: -1 }}
        width={`${windowWidth}px`}
      />

      <ModalAppointmentBookingConfirmation visible={confirmationModalVisible} />

      <Styled.Centered>
        <Main>
          <Columns columns={isLargeScreen ? 2 : 1} gap="4vmin">
            <Styled.FilterBox isSticky={isLargeScreen}>
              <FormGroup>
                <Heading>What type of appointment do you need?</Heading>

                <Styled.Options>
                  <RadioInput
                    checked={selectedAppointmentType === 'consultation'}
                    description="If you've never had a therapy session with Spill before, select this option. A consultation is a short meeting that will help us tailor future sessions to your needs."
                    heading="Consultation"
                    name="type"
                    onSelect={() => {
                      query.set('type', 'consultation')
                      push(`?${query.toString()}`)
                    }}
                  />

                  <RadioInput
                    checked={selectedAppointmentType === 'one_off'}
                    description="Book a single session with one of our accredited therapists. There's no obligation to attend multiple sessions, but you can come back and book more if you need."
                    heading="One-off"
                    name="type"
                    onSelect={() => {
                      query.set('type', 'one_off')
                      push(`?${query.toString()}`)
                    }}
                  />
                </Styled.Options>
              </FormGroup>

              <FormGroup>
                <Heading>How would you like to communicate?</Heading>

                <AppointmentMediaControl />
              </FormGroup>

              <FormGroup>
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
              </FormGroup>
            </Styled.FilterBox>

            <Box>
              <FormGroup>
                <SelectDayHeader />
              </FormGroup>

              {confirmationButtonObscured && (
                <FormGroup>
                  <Styled.BookAppointmentButton
                    disabled={!query.get('appointment')}
                    onClick={() =>
                      query.get('appointment') &&
                      setConfirmationModalVisible(true)
                    }
                  >
                    Confirm appointment
                  </Styled.BookAppointmentButton>
                </FormGroup>
              )}

              <FormGroup grow>
                <AppointmentList />
              </FormGroup>

              <FormGroup>
                <Styled.BookAppointmentButton
                  disabled={!query.get('appointment')}
                  onClick={() =>
                    query.get('appointment') &&
                    setConfirmationModalVisible(true)
                  }
                  ref={confirmationButtonRef}
                >
                  Confirm appointment
                </Styled.BookAppointmentButton>
              </FormGroup>
            </Box>
          </Columns>
        </Main>
      </Styled.Centered>
    </>
  )
}

import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Heading } from '../Heading'
import { RadioInput } from '../RadioInput'
import { Title } from '../Title'

import * as Styled from './App.styled'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function App() {
  const { push } = useHistory()
  const query = useQuery()

  const [type, setType] = useState(() => query.get('type'))

  useEffect(() => {
    if (type) push(`?type=${type}`)
  }, [push, type])

  return (
    <>
      <Styled.Global />

      <Styled.Centered>
        <Styled.Main>
          <Title>Book an appointment</Title>

          <Styled.Box>
            <Heading>1. Choose an appointment type</Heading>

            {/* <ButtonGroup>
              <Button
                isSelected={type === 'consultation'}
                onClick={() => push('?type=consultation')}
              >
                Consultation
              </Button>
              <Button
                isSelected={type === 'one_off'}
                onClick={() => push('?type=one_off')}
              >
                One-Off
              </Button>
            </ButtonGroup> */}

            <Styled.Options>
              <RadioInput
                checked={type === 'consultation'}
                description="If you've never had a therapy session with Spill before, select this option. A consultation is a short meeting that will help us tailor future sessions to your needs."
                heading="Consultation"
                name="type"
                onSelect={() => setType('consultation')}
              />

              <RadioInput
                checked={type === 'one_off'}
                description="Book a single session with one of our accredited therapists. There's no obligation to attend multiple sessions, but you can come back and book more if you need."
                heading="One-off"
                name="type"
                onSelect={() => setType('one_off')}
              />
            </Styled.Options>
          </Styled.Box>
        </Styled.Main>
      </Styled.Centered>
    </>
  )
}

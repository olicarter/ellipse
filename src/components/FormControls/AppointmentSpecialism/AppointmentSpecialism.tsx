import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { useQueryParams } from 'src/hooks'

import type {
  AppointmentSpecialismProps,
  GetSpecialismData,
  GetSpecialismVars,
} from './AppointmentSpecialism.types'
import { queries } from './AppointmentSpecialism.gql'
import * as Styled from './AppointmentSpecialism.styled'

export function AppointmentSpecialism({ id }: AppointmentSpecialismProps) {
  const { push } = useHistory()
  const query = useQueryParams()

  const selectedSpecialisms = query.getAll('specialism')

  const { data } = useQuery<GetSpecialismData, GetSpecialismVars>(
    queries.GET_SPECIALISM,
    { variables: { id } },
  )

  const name = data?.specialism.name

  if (!name) return null

  return (
    <Styled.Toggle
      key={id}
      active={selectedSpecialisms.includes(name)}
      onClick={() => {
        if (selectedSpecialisms.includes(name)) {
          const newSelectedSpecialisms = selectedSpecialisms.filter(
            i => i !== name,
          )
          query.delete('specialism')
          newSelectedSpecialisms.forEach(m => {
            query.append('specialism', m)
          })
        } else {
          query.append('specialism', name)
        }
        push(`?${query.toString()}`)
      }}
    >
      {name}
    </Styled.Toggle>
  )
}

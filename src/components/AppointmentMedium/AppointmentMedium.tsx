import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Icon from '@mdi/react'

import { useQueryParams } from 'src/hooks'

import type {
  AppointmentMediumProps,
  GetAppointmentMediumData,
  GetAppointmentMediumVars,
} from './AppointmentMedium.types'
import { queries } from './AppointmentMedium.gql'
import * as Styled from './AppointmentMedium.styled'

export function AppointmentMedium({ id }: AppointmentMediumProps) {
  const { push } = useHistory()
  const query = useQueryParams()

  const { data } = useQuery<GetAppointmentMediumData, GetAppointmentMediumVars>(
    queries.GET_APPOINTMENT_MEDIUM,
    { variables: { id } },
  )

  if (!data?.appointmentMedium) return null

  const { icon, name } = data?.appointmentMedium || {}

  function toggle() {
    const currSelectedNames = query.getAll('medium')

    if (currSelectedNames.includes(name)) {
      const newSelectedNames = currSelectedNames.filter(n => n !== name)
      query.delete('medium')
      newSelectedNames.forEach(n => query.append('medium', n))
    } else {
      query.append('medium', name)
    }
    push(`?${query.toString()}`)
  }

  return (
    <Styled.AppointmentMedium
      active={query.getAll('medium').includes(name)}
      onClick={toggle}
    >
      <Styled.Icon>
        <Icon path={icon} size={1} />
      </Styled.Icon>

      <Styled.Heading>{name}</Styled.Heading>
    </Styled.AppointmentMedium>
  )
}

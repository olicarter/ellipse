import { useHistory } from 'react-router-dom'
import Icon from '@mdi/react'

import { useQuery } from 'src/hooks'

import type { AppointmentMediumProps } from './AppointmentMedium.types'
import * as Styled from './AppointmentMedium.styled'

export function AppointmentMedium({ icon, type }: AppointmentMediumProps) {
  const { push } = useHistory()
  const query = useQuery()

  function toggle() {
    const selectedMediums = query.getAll('medium')
    if (selectedMediums.includes(type)) {
      const newSelectedMediums = selectedMediums.filter(i => i !== type)
      query.delete('medium')
      newSelectedMediums.forEach(m => query.append('medium', m))
    } else {
      query.append('medium', type)
    }
    push(`?${query.toString()}`)
  }

  return (
    <Styled.AppointmentMedium
      active={query.getAll('medium').includes(type)}
      onClick={toggle}
    >
      <Styled.Icon>
        <Icon path={icon} size={1} />
      </Styled.Icon>

      <Styled.Heading>{type}</Styled.Heading>
    </Styled.AppointmentMedium>
  )
}

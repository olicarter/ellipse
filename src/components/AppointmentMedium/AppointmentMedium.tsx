import { useHistory } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiForum, mdiPhone, mdiVideo } from '@mdi/js'

import { useQueryParams } from 'src/hooks'

import type { AppointmentMediumProps } from './AppointmentMedium.types'
import * as Styled from './AppointmentMedium.styled'

export function AppointmentMedium({ medium }: AppointmentMediumProps) {
  const { push } = useHistory()
  const query = useQueryParams()

  const icon = (() => {
    switch (medium) {
      case 'chat':
        return mdiForum
      case 'phone':
        return mdiPhone
      case 'video':
        return mdiVideo
    }
  })()

  return (
    <Styled.AppointmentMedium
      active={query.get('medium') === medium}
      onClick={() => {
        query.set('medium', medium)
        push(`?${query.toString()}`)
      }}
    >
      <Styled.Icon>
        <Icon path={icon} size={1} />
      </Styled.Icon>

      <Styled.Heading>{medium}</Styled.Heading>
    </Styled.AppointmentMedium>
  )
}

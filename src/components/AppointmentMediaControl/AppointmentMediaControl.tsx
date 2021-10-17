import { useQuery } from '@apollo/client'

import { Columns } from 'src/components/Core'
import { AppointmentMedium } from 'src/components/AppointmentMedium'

import type { GetAppointmentMediaData } from './AppointmentMediaControl.types'
import { queries } from './AppointmentMediaControl.gql'

export function AppointmentMediaControl() {
  const { data } = useQuery<GetAppointmentMediaData>(
    queries.GET_APPOINTMENT_MEDIA,
  )

  const appointmentMedia = data?.appointmentMedia || []

  return (
    <Columns columns={appointmentMedia.length} gap="1rem">
      {appointmentMedia.map(({ id }) => (
        <AppointmentMedium key={id} id={id} />
      ))}
    </Columns>
  )
}

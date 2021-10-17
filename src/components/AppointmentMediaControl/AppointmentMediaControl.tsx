import { APPOINTMENT_MEDIA } from 'src/types'
import { Columns } from 'src/components/Core'
import { AppointmentMedium } from 'src/components/AppointmentMedium'

export function AppointmentMediaControl() {
  return (
    <Columns columns={APPOINTMENT_MEDIA.length} gap="1rem">
      {APPOINTMENT_MEDIA.map(medium => (
        <AppointmentMedium key={medium} medium={medium} />
      ))}
    </Columns>
  )
}

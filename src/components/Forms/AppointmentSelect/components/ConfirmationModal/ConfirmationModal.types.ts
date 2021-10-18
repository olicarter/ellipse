import type { Appointment } from 'src/types'
import type { ModalProps } from 'src/components/Core'

export type ConfirmationModalProps = {
  visible: ModalProps['visible']
}

export type GetAppointmentData = {
  appointment: Appointment
}

export type GetAppointmentVars = {
  id: Appointment['id']
}

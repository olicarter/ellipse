import type { Appointment } from 'src/types'
import type { ModalProps } from 'src/components/Modal'

export type ModalAppointmentBookingConfirmationProps = {
  visible: ModalProps['visible']
}

export type GetAppointmentData = {
  appointment: Appointment
}

export type GetAppointmentVars = {
  id: Appointment['id']
}

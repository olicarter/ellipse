export const APPOINTMENT_MEDIA = ['chat', 'phone', 'video'] as const

export const APPOINTMENT_TYPES = ['consultation', 'one_off'] as const

export type Appointment = {
  id: string
  counsellor: Counsellor
  startsAt: string
}

export type AppointmentMedium = typeof APPOINTMENT_MEDIA[number]

export type AppointmentType = typeof APPOINTMENT_TYPES[number]

export type Counsellor = {
  id: string
  appointmentMedia: AppointmentMedium[]
  appointmentTypes: AppointmentType[]
  avatar: string
  firstName: string
  lastName: string
  specialisms: Specialism[]
}

export type Specialism = {
  id: string
  name: string
}

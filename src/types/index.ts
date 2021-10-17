export type Appointment = {
  id: string
  counsellor: Counsellor // Would always be defined IRL
  startsAt: string
}

export type AppointmentMedium = {
  id: string
  icon: string
  name: 'chat' | 'phone' | 'video'
}

export type AppointmentType = 'consultation' | 'one_off'

export type Counsellor = {
  id: string
  // appointments: Appointment[]
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

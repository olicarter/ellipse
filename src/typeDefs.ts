import { gql } from '@apollo/client'

export default gql`
  enum AppointmentType {
    consultation
    one_off
  }

  enum AppointmentMedium {
    chat
    phone
    video
  }

  enum AppointmentsOrderBy {
    startsAt_ASC
    startsAt_DESC
  }

  type Appointment {
    id: ID!
    counsellor: Counsellor!
    startsAt: String!
  }

  type AppointmentsFilter {
    date: String
    media: [AppointmentMedium]
    specialisms: [String]
    type: AppointmentType!
  }

  type Counsellor {
    id: ID!
    appointmentMedia: [AppointmentMedium]!
    appointments: [Appointment]!
    appointmentTypes: [AppointmentType]!
    firstName: String!
    lastName: String!
    specialisms: [Specialism]!
  }

  type Specialism {
    id: ID!
    name: String!
  }

  type Query {
    appointment(id: ID!): Appointment
    appointments(
      filter: AppointmentsFilter
      orderBy: AppointmentsOrderBy
    ): [Appointment]!
    appointmentMedia: [AppointmentMedium]!
    appointmentMedium(id: ID!): AppointmentMedium
    counsellor(id: ID!): Counsellor
    specialism(id: ID!): Specialism
    specialisms: [Specialism]!
  }
`

import { gql } from '@apollo/client'

export default gql`
  enum AppointmentType {
    consultation
    one_off
  }

  enum AppointmentMedium {
    phone
    video
  }

  type Counsellor {
    id: ID!
    firstName: String!
    lastName: String!
    appointmentTypes: [AppointmentType]!
    appointmentMediums: [AppointmentMedium!]!
    specialisms: [String]!
  }

  type Appointment {
    id: ID!
    counsellor: Counsellor!
    startsAt: String!
  }

  type Query {
    appointment(id: ID!): Appointment
    counsellor(id: ID!): Counsellor
  }
`

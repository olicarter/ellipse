import { gql } from '@apollo/client'

export const queries = {
  GET_APPOINTMENT_MEDIUM: gql`
    query AppointmentMediumGetAppointmentMedium($id: ID!) {
      appointmentMedium(id: $id) {
        id
        icon
        name
      }
    }
  `,
}

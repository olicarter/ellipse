import { gql } from '@apollo/client'

export const queries = {
  GET_APPOINTMENT_MEDIA: gql`
    query AppointmentMediaControlGetAppointmentMedia {
      appointmentMedia {
        id
      }
    }
  `,
}

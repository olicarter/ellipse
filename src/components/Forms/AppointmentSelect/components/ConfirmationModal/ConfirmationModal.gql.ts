import { gql } from '@apollo/client'

export const queries = {
  GET_APPOINTMENT: gql`
    query ModalAppointmentBookingConfirmationGetAppointment($id: ID!) {
      appointment(id: $id) {
        id
        startsAt
        counsellor {
          id
          avatar
          firstName
          lastName
        }
      }
    }
  `,
}

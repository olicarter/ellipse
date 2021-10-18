import { gql } from '@apollo/client'

export const queries = {
  GET_APPOINTMENTS: gql`
    query AppointmentListGetAppointments(
      $filter: AppointmentsFilter
      $orderBy: AppointmentsOrderBy
    ) {
      appointments(filter: $filter, orderBy: $orderBy) {
        id
        counsellor {
          id
          avatar
          firstName
          lastName
        }
        startsAt
      }
    }
  `,
}

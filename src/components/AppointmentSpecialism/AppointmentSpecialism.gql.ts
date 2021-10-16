import { gql } from '@apollo/client'

export const queries = {
  GET_SPECIALISM: gql`
    query AppointmentSpecialismGetSpecialism($id: ID!) {
      specialism(id: $id) {
        id
        name
      }
    }
  `,
}

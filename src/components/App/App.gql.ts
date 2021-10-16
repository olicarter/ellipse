import { gql } from '@apollo/client'

export const queries = {
  GET_SPECIALISMS: gql`
    query {
      specialisms {
        id
      }
    }
  `,
}

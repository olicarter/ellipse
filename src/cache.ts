import { makeVar } from '@apollo/client'
import { v4 as uuid } from 'uuid'

import counsellors from 'src/counsellor-mock.json'

// Extract unique specialisms from mock data and map to array of objects
// with unique IDs to mimic structure of data fetched from GraphQL API
export const specialismsVar = makeVar(
  counsellors
    .reduce<string[]>(
      (prev, curr) => Array.from(new Set([...prev, ...curr.specialisms])),
      [],
    )
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({ id: uuid(), name })),
)

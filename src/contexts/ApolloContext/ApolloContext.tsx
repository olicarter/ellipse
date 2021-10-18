import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client'
import { compareAsc, isSameDay, parseISO } from 'date-fns'

import type { AppointmentMedium, AppointmentType } from 'src/types'

import type { ApolloProviderProps } from './ApolloContext.types'
import { appointmentsVar, counsellorsVar, specialismsVar } from './data'

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          appointment: {
            read(_, { args }) {
              console.log(args?.id)
              console.log(appointmentsVar().find(({ id }) => id === args?.id))
              return appointmentsVar().find(({ id }) => id === args?.id)
            },
          },
          appointments: {
            read(_, { args }) {
              const date: string = args?.filter.date
              const medium: AppointmentMedium = args?.filter.medium
              const specialisms: string[] = args?.filter.specialisms
              const type: AppointmentType = args?.filter.type
              const orderBy = args?.orderBy

              const appointments = appointmentsVar().filter(
                ({ counsellor, startsAt }) => {
                  const filters = {
                    medium: medium
                      ? counsellor.appointmentMedia.includes(medium)
                      : true,
                    specialisms: specialisms.length
                      ? specialisms.every(specialism =>
                          counsellor.specialisms.find(
                            ({ name }) => specialism === name,
                          ),
                        )
                      : true,
                    date: date
                      ? isSameDay(parseISO(date), parseISO(startsAt))
                      : true,
                    type: type
                      ? counsellor.appointmentTypes.includes(type)
                      : true,
                  }

                  return (
                    filters.medium &&
                    filters.specialisms &&
                    filters.type &&
                    filters.date
                  )
                },
              )

              if (orderBy === 'startsAt') {
                appointments.sort((a, b) =>
                  compareAsc(new Date(a.startsAt), new Date(b.startsAt)),
                )
              }

              return appointments
            },
          },
          counsellor: {
            read(_, { args }) {
              return counsellorsVar().find(({ id }) => id === args?.id)
            },
          },
          specialism: {
            read(_, { args }) {
              return specialismsVar().find(({ id }) => id === args?.id)
            },
          },
          specialisms: {
            read() {
              return specialismsVar()
            },
          },
        },
      },
    },
  }),
})

export function ApolloProvider({ children }: ApolloProviderProps) {
  return <Provider client={client}>{children}</Provider>
}

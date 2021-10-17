import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { compareAsc, isSameDay, parseISO } from 'date-fns'

import { AppointmentType } from 'src/types'

import { App } from './components/App'
import typeDefs from './typeDefs'
import reportWebVitals from './reportWebVitals'
import {
  appointmentsVar,
  appointmentMediaVar,
  counsellorsVar,
  specialismsVar,
} from './cache'

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          appointment: {
            read(_, { args }) {
              return appointmentsVar().find(({ id }) => id === args?.id)
            },
          },
          appointments: {
            read(_, { args }) {
              const date: string = args?.filter.date
              const media: string[] = args?.filter.media
              const specialisms: string[] = args?.filter.specialisms
              const type: AppointmentType = args?.filter.type
              const orderBy = args?.orderBy

              const appointments = appointmentsVar().filter(
                ({ counsellor, startsAt }) => {
                  const mediaFilter = media.length
                    ? counsellor.appointmentMedia.some(({ name }) =>
                        media.includes(name),
                      )
                    : true
                  const specialismsFilter = specialisms.length
                    ? specialisms.every(specialism =>
                        counsellor.specialisms.find(
                          ({ name }) => specialism === name,
                        ),
                      )
                    : true
                  const dateFilter = date
                    ? isSameDay(parseISO(date), parseISO(startsAt))
                    : true
                  return (
                    mediaFilter &&
                    specialismsFilter &&
                    counsellor.appointmentTypes.includes(type) &&
                    dateFilter
                  )
                },
              )

              if (orderBy === 'startsAt') {
                return appointments.sort((a, b) =>
                  compareAsc(new Date(a.startsAt), new Date(b.startsAt)),
                )
              }

              return appointments
            },
          },
          appointmentMedia: {
            read() {
              return appointmentMediaVar()
            },
          },
          appointmentMedium: {
            read(_, { args }) {
              return appointmentMediaVar().find(({ id }) => id === args?.id)
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
  typeDefs,
})

const colors = {
  black: '#000',
  blue: '#041549',
  gray: '#f3f4f6',
  grayDark: '#374151',
  teal: '#35D0BA',
  white: '#fff',
}

const theme = {
  colors: {
    background: colors.gray,
    black: colors.black,
    blue: colors.blue,
    gray: colors.gray,
    grayDark: colors.grayDark,
    teal: colors.teal,
    white: colors.white,
  },
}

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

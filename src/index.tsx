import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { compareAsc, isSameDay, parseISO } from 'date-fns'

import { AppointmentMedium, AppointmentType } from 'src/types'

import { App } from './components/App'
import typeDefs from './typeDefs'
import reportWebVitals from './reportWebVitals'
import { appointmentsVar, counsellorsVar, specialismsVar } from './cache'

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
                  const mediumFilter = medium
                    ? counsellor.appointmentMedia.includes(medium)
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
                  const typeFilter = type
                    ? counsellor.appointmentTypes.includes(type)
                    : true
                  return (
                    mediumFilter &&
                    specialismsFilter &&
                    typeFilter &&
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
  red: 'crimson',
  teal: '#35D0BA',
  white: '#fff',
  yellow: 'goldenrod',
}

const theme = {
  colors: {
    background: colors.white,
    black: colors.black,
    blue: colors.blue,
    error: colors.red,
    gray: colors.gray,
    grayDark: colors.grayDark,
    red: colors.red,
    teal: colors.teal,
    warning: colors.yellow,
    white: colors.white,
    yellow: colors.yellow,
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

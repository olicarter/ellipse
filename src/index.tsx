import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { App } from './components/App'
import typeDefs from './typeDefs'
import reportWebVitals from './reportWebVitals'
import { specialismsVar } from './cache'

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
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

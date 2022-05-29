import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { store } from '../store'
import { userDelete } from '../store/actions/user'
import Router from 'next/router'
import { loadingUpdate } from '../store/actions/loading'

const httpLink = createHttpLink({
  uri: process.env.BACKEND_URI
})

const authLink = setContext((_, { headers }) => {
  store.dispatch(loadingUpdate({ open: true }))

  const token = localStorage.getItem(process.env.tokenName)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const formatDateLink = new ApolloLink((operation, forward) => {
  const op = forward(operation).map(response => {
    console.log(response.data);

    if (response.data.date) {
      response.data.date = new Date(response.data.date)
    }
    return response
  })
  store.dispatch(loadingUpdate({ open: false }))
  return op
})
const errorLink = onError(({ graphQLErrors, networkError, }) => {
  if (graphQLErrors) {
    const filter = graphQLErrors.filter(
      ({ message }) => message === 'Unauthorized'
    )
    if (filter.length > 0) {
      store.dispatch(userDelete())
      Router.push('/')
    }
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
  return;
})
export const clientGraphql = new ApolloClient({
  link: ApolloLink.from([httpLink, errorLink, formatDateLink, authLink]),
  cache: new InMemoryCache(),
  typeDefs: [
    'type LoginInput {  reqEmail: String!  reqGoogleId: String!reqTokenId: String!}'
  ]
})

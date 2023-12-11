import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { store } from '../store'
import { userDelete } from '../store/actions/user'
import Router from 'next/router'
import { loadingUpdate } from '../store/actions/loading'

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

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    const filter = graphQLErrors.filter(
      ({ message }) => message === 'Unauthorized'
    )
    if (filter.length > 0) {
      store.dispatch(userDelete())
      Router.push('/')
    }
  }
})

const formatDateLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    store.dispatch(loadingUpdate({ open: false }))

    if (response.data && response.data.date) {
      response.data.date = new Date(response.data.date)
    }

    return response
  })
})

export const clientGraphql = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    authLink,
    formatDateLink,
    new HttpLink({
      uri: process.env.BACKEND_URI + '/graphql'
    })
  ]),
  cache: new InMemoryCache(),
  typeDefs: ['type LoginInput {  reqTokenId: String! }']
})

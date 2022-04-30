import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql', //`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false
  })
})

export default apolloClient

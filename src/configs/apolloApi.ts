import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`, // `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false
  })
})

export default apolloClient

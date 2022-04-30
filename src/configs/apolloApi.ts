import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: ' https://projeto-fabrica-cms.herokuapp.com//graphql', //`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false
  })
})

export default apolloClient

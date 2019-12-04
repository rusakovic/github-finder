import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const TOKEN = '15d0d1a90dc325e2bff18bfd6e70e17216aae9ea';

const client = new ApolloClient({
  link: createHttpLink({ 
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `token ${TOKEN}`
    }
  }),
  cache: new InMemoryCache()
})

export { client as default }
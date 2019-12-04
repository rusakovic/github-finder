import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const TOKEN = '5a5d5a17c31f627ee5ee320aefc23f62625bd663';

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
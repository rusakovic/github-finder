import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import client from './apollo/apollo-client'
import GitHubFinderApp from './components/GitHubFinderApp/GitHubFinderApp.component'


ReactDOM.render(
  <ApolloProvider client={client}>
    <GitHubFinderApp />
  </ApolloProvider>,
  document.getElementById('root')
)

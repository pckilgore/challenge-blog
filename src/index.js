import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Router
import { BrowserRouter } from 'react-router-dom'

// Setup AppSync / GraphQl
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { ApolloProvider } from 'react-apollo'
import AppSync from './AppSync.js'

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey,
  },
})

const AppWithProviders = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Rehydrated>
  </ApolloProvider>
)

ReactDOM.render(<AppWithProviders />, document.getElementById('root'))
registerServiceWorker()

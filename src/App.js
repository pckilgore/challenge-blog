// React Libs
import React from 'react'

// Components
import Routes from './routes'
import Layout from './layout'

//Styles
import './App.css'

// Data
import { compose } from 'react-apollo'
import * as gql from './graphql/resolvers'

export const App = props => (
  <Layout {...props}>
    <Routes {...props} />
  </Layout>
)

export default compose(gql.allPostsAction)(App)

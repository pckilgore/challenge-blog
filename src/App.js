// React Libs
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Layout from './layout'

//Styles
import './App.css'

// DummyData
import { DUMMY } from './DummyData'

export const App = () => (
  <BrowserRouter>
    <Layout posts={DUMMY}>
      <Routes posts={DUMMY} />
    </Layout>
  </BrowserRouter>
)

export default App

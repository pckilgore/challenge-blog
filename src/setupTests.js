import React from 'react'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from 'react-testing-library'
import { Router } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { AllPostsQuery } from './graphql/queries/AllPostsQuery'

const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
})

const AllPostsMock = [
  {
    request: { query: AllPostsQuery },
    result: {
      data: {
        posts: [],
      },
    },
  },
]

global.renderWithRouter = renderWithRouter
global.createMemoryHistory = createMemoryHistory
global.render = render
global.fireEvent = fireEvent
global.ApolloMockProvider = MockedProvider
global.AllPostsMock = AllPostsMock

import React from 'react'
import ReactDOM from 'react-dom'

import AppSync from './AppSync.js'
import { App } from './App'

it('The Application renders without crashing', () => {
  const div = document.createElement('div')
  const props = {
    posts: [],
    subscribeToNewPosts: jest.fn(),
  }
  const app = renderWithRouter(<App {...props} />)
})

it('`/src/AppSync.js` contains the all the necessary keys.', () => {
  expect(AppSync).toEqual(
    expect.objectContaining({
      graphqlEndpoint: expect.any(String),
      region: expect.any(String),
      apiKey: expect.any(String),
    })
  )
})

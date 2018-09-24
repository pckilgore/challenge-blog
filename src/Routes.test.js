import React from 'react'
import Routes from './Routes'
import { AllPostsQuery } from './graphql/queries/AllPostsQuery'

describe('The Router', () => {
  const subscribeToNewPosts = jest.fn()

  const testPost = {
    id: 'fakeId',
    author: 'Test Author',
    content: 'Testing 1,2,3.',
    title: 'Test title',
    imageUrl: 'https://fillmurray.com/100/100',
    lastUpdated: '12345',
    status: 'PUBLISHED',
  }

  const testPost2 = { ...testPost, id: 'fakeId2' }
  const testPost3 = { ...testPost, id: 'fakeId3' }

  const MockRouter = () => (
    <ApolloMockProvider mocks={AllPostsMock} addTypename={false}>
      <Routes
        {...{ subscribeToNewPosts }}
        posts={[testPost, testPost2, testPost3]}
      />
    </ApolloMockProvider>
  )

  it('...renders the 404 page if appropriate', () => {
    const { getByText } = renderWithRouter(
      <Routes {...{ subscribeToNewPosts }} />,
      {
        route: '/something-that-does-not-match',
      }
    )
    expect(getByText("can't find", { exact: false })).toBeInTheDocument()
  })

  it('...renders the new posts form at /post/new', () => {
    const { getByText } = renderWithRouter(<MockRouter />, {
      route: '/post/new',
    })

    expect(getByText('Write a new post', { exact: false })).toBeInTheDocument()
  })

  it('...renders a single post at /post/:id', () => {
    const { getByText } = renderWithRouter(<MockRouter />, {
      route: '/post/fakeId',
    })

    expect(getByText('Test title', { exact: false })).toBeInTheDocument()
  })

  it('...renders all Posts at /', () => {
    const { queryAllByText } = renderWithRouter(<MockRouter />, {
      route: '/',
    })

    expect(queryAllByText('Test title', { exact: false })).toHaveLength(3)
  })
})

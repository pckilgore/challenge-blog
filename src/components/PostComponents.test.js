import React from 'react'

import Post from './Post'
import Home from './Home'
import { PostForm } from './PostForm'
import SinglePost from './SinglePost'

const testPost = {
  id: 'fakeId',
  author: 'Test Author',
  content: 'Testing 1,2,3.',
  title: 'Test title',
  imageUrl: 'https://fillmurray.com/100/100',
  lastUpdated: '12345',
  status: 'PUBLISHED',
}

it('Post renders a test post', () => {
  const { getByText } = render(<Post post={testPost} />)
  expect(getByText(testPost.author, { exact: false })).toBeInTheDocument()
  expect(getByText(testPost.content, { exact: false })).toBeInTheDocument()
  expect(getByText('Published on', { exact: false })).toBeInTheDocument()
})

it('Post does not render the date if DRAFT status', () => {
  const { getByText } = render(<Post post={{ ...testPost, status: 'DRAFT' }} />)
  expect(getByText('unpublished draft', { exact: false })).toBeInTheDocument()
})

describe('Home', () => {
  it('...renders a message if posts list empty', () => {
    const { getByText } = renderWithRouter(<Home posts={[]} />)
    expect(
      getByText('no published posts', { exact: false })
    ).toBeInTheDocument()
  })

  it('...renders a message if posts list undefined', () => {
    const { getByText } = renderWithRouter(<Home />)
    expect(
      getByText('no published posts', { exact: false })
    ).toBeInTheDocument()
  })

  describe('...with lots of posts', () => {
    const ORDER_ADJUSTMENT = 100

    const draft = {
      ...testPost,
      lastUpdated: '100',
      status: 'DRAFT',
      title: 'DRAFT',
    }

    const orderedPosts = new Array(18).fill(0).map((el, i) => ({
      ...testPost,
      id: `${i}`,
      lastUpdated: `${i + ORDER_ADJUSTMENT}`,
    }))

    it('...renders all the posts in the list', () => {
      const posts = [...orderedPosts]
      const { queryAllByText } = renderWithRouter(<Home {...{ posts }} />)
      const query = queryAllByText(testPost.author, { exact: false })
      expect(query).toHaveLength(18)
    })

    it('...renders no draft posts', () => {
      const posts = [draft, ...orderedPosts]
      const { queryByText } = renderWithRouter(<Home {...{ posts }} />)
      expect(queryByText('DRAFT', { exact: false })).toBeNull()
    })
  })
})

describe('PostForm', () => {
  let mockForm, submitButton, toggle
  const onAdd = jest.fn()

  beforeEach(() => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    mockForm = render(<PostForm onAdd={onAdd} {...{ history }} />)
    submitButton = mockForm.getByText('submit', { exact: false })
    toggle = mockForm.container.querySelector('input[type="checkbox"]')
  })

  it("...won't let you post if you don't fill everything out", () => {
    expect(submitButton).toHaveAttribute('disabled')
    fireEvent.click(submitButton)
    expect(onAdd).not.toHaveBeenCalled()
  })

  describe('...but if you add data', () => {
    const testData = {
      title: 'A test post',
      author: 'Yakov Smirnoff',
      imageUrl: 'https://fillmurray.com/100/100',
      content: 'Form test you!',
    }

    beforeEach(() => {
      onAdd.mockClear()
      Object.keys(testData).forEach(label => {
        const element = mockForm.getByLabelText(label, { exact: false })
        fireEvent.change(element, { target: { value: testData[label] } })
      })
    })

    it('...lets you submit', () => {
      expect(submitButton).not.toHaveAttribute('disabled')
      expect(onAdd).not.toHaveBeenCalled()
      fireEvent.click(submitButton)
      expect(onAdd).toHaveBeenCalled()
    })

    it('...passes the right input to the mutation function', () => {
      fireEvent.click(submitButton)
      expect(onAdd.mock.calls[0][0]).toMatchObject({
        ...testData,
        status: 'DRAFT',
      })
    })

    it('...passes the right input to the mutation function if you click the toggle', () => {
      fireEvent.click(toggle)
      fireEvent.click(submitButton)
      expect(onAdd.mock.calls[0][0]).toMatchObject({
        ...testData,
        status: 'PUBLISHED',
      })
    })
  })
})

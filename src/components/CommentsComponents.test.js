import React from 'react'

import Comment from './Comment'
import CommentList from './CommentList'
import { CommentForm } from './CommentForm'

const testComment = {
  author: 'Test Author',
  content: 'Testing 1,2,3.',
}

describe('Comment', () => {
  it('renders a test comment', () => {
    const { getByText } = render(<Comment {...testComment} even={true} />)
    expect(getByText(testComment.author, { exact: false })).toBeInTheDocument()
    expect(getByText(testComment.content, { exact: false })).toBeInTheDocument()
  })

  it("doesn't care if author is missing", () => {
    const { getByText } = render(
      <Comment {...{ ...testComment, author: undefined }} even={true} />
    )
    expect(getByText('anonymous coward', { exact: false })).toBeInTheDocument()
  })
})

describe('CommentList', () => {
  it('...renders a message if comments list empty', () => {
    const { getByText } = render(<CommentList post={{ comments: [] }} />)
    expect(getByText('no comments', { exact: false })).toBeInTheDocument()
  })

  it('...renders a message if comments list undefined', () => {
    const { getByText } = render(<CommentList post={{}} />)
    expect(getByText('no comments', { exact: false })).toBeInTheDocument()
  })

  describe('...with lots of comments', () => {
    const ORDER_ADJUSTMENT = 100

    const unOrderedComments = [
      { content: 'last', lastUpdated: '10000' },
      { content: 'first', lastUpdated: '0' },
    ]

    const orderedComments = new Array(18).fill(0).map((el, i) => ({
      ...testComment,
      lastUpdated: `${i + ORDER_ADJUSTMENT}`,
    }))

    it('...renders all the comments in the list', () => {
      const comments = [...orderedComments]
      const { queryAllByText } = render(<CommentList post={{ comments }} />)
      const query = queryAllByText(testComment.author, { exact: false })
      expect(query).toHaveLength(18)
    })
    it('...renders the comments in chronological order', () => {
      const comments = [...unOrderedComments, ...orderedComments]
      const { container } = render(<CommentList post={{ comments }} />)
      const firstComment = container.querySelector('ul > li:nth-child(1)')
      const lastComment = container.querySelector('ul > li:nth-child(20)')
      expect(firstComment).toHaveTextContent('first')
      expect(lastComment).toHaveTextContent('last')
    })
  })
})

describe('CommentForm', () => {
  let mockForm, submitButton
  const onAdd = jest.fn()

  beforeEach(() => {
    mockForm = render(<CommentForm post={{ id: 'fake' }} onAdd={onAdd} />)
    submitButton = mockForm.getByText('submit', { exact: false })
  })

  it("...won't let you comment if you don't fill everything out", () => {
    expect(submitButton).toHaveAttribute('disabled')
    fireEvent.click(submitButton)
    expect(onAdd).not.toHaveBeenCalled()
  })

  describe('...but if you add data', () => {
    const testData = { author: 'Yakov Smirnoff', content: 'Form test you!' }

    beforeEach(() => {
      onAdd.mockClear()
      const authorField = mockForm.getByLabelText('author', { exact: false })
      const contentField = mockForm.getByLabelText('content', { exact: false })
      fireEvent.change(authorField, { target: { value: testData.author } })
      fireEvent.change(contentField, { target: { value: testData.content } })
    })

    it('...lets you submit', () => {
      expect(submitButton).not.toHaveAttribute('disabled')
      expect(onAdd).not.toHaveBeenCalled()
      fireEvent.click(submitButton)
      expect(onAdd).toHaveBeenCalled()
    })

    it('...passes the right input to the mutation function', () => {
      fireEvent.click(submitButton)
      expect(onAdd.mock.calls[0][0]).toMatchObject({ id: 'fake', ...testData })
    })
  })
})

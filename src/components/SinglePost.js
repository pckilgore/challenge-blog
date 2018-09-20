import React, { Component, Fragment } from 'react'
import Post from './Post'
import CommentList from './CommentList'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const hardPost = {
  id: '1',
  title: 'My first post',
  author: 'Someone',
  content: lorem,
  imageUrl: '',
  status: 'PUBLISHED',
  comments: [
    { id: 1, author: 'comment one author', text: 'Comment One' },
    { id: 2, author: 'comment two author', text: 'Comment One' },
    { id: 3, author: 'comment three author', text: lorem },
  ],
}

class SinglePost extends Component {
  render() {
    const { id: linkId } = this.props
    const post = {
      ...hardPost,
      id: linkId,
      title: `${linkId} ${hardPost.title}`,
    }
    return (
      <Fragment>
        <Post post={post} />
        <CommentList comments={post.comments} />
      </Fragment>
    )
  }
}

export default SinglePost

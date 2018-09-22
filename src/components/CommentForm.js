import React from 'react'
import FormField from './FormField'

import { compose } from 'react-apollo'
import { AddCommentAction } from '../graphql/resolvers'

class CommentForm extends React.Component {
  state = {
    id: this.props.post.id,
    author: '',
    content: '',
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.onAdd({ ...this.state })
  }

  handleChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  render() {
    const { author, content } = this.state
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <h2>Write a new comment </h2>
        <h3>all fields are required</h3>
        <FormField onChange={this.handleChange} label="author" value={author} />
        <FormField
          onChange={this.handleChange}
          label="content"
          value={content}
        />
        <button type="submit" className="button" disabled={!author || !content}>
          Submit
        </button>
      </form>
    )
  }
}

export default compose(AddCommentAction)(CommentForm)

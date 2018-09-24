import React from 'react'
import PropTypes from 'prop-types'

import FormField from './FormField'

import { compose } from 'react-apollo'
import { AddCommentAction } from '../graphql/resolvers'

export class CommentForm extends React.Component {
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

const ConnectedCommentForm = compose(AddCommentAction)(CommentForm)

export default ConnectedCommentForm

CommentForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

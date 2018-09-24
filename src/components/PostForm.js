import React from 'react'
import PropTypes from 'prop-types'

import { compose } from 'react-apollo'
import { AddPostAction } from '../graphql/resolvers'

import FormField from './FormField'
import ToggleButton from 'react-toggle-button'

export class PostForm extends React.Component {
  state = {
    title: '',
    author: '',
    imageUrl: '',
    content: '',
    status: 'DRAFT',
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    await this.props.onAdd({ ...this.state })
    this.props.history.push('/')
  }

  handleChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  FormField = props => <FormField {...props} onChange={this.handleChange} />

  handleToggle = value => {
    const status = value ? 'DRAFT' : 'PUBLISHED'
    this.setState({ status })
  }

  StatusToggle = ({ status }) => {
    const onIfPublished = status === 'PUBLISHED' || false
    return (
      <ToggleButton
        value={onIfPublished}
        onToggle={this.handleToggle}
        activeLabel={'PUBLISH'}
        inactiveLabel={'DRAFT'}
        trackStyle={{ minWidth: '100px', minHeight: '30px' }}
        thumbStyle={{ minHeight: '30px', minWidth: '30px' }}
        activeLabelStyle={{ fontSize: '.9em' }}
        inactiveLabelStyle={{ fontSize: '.9em' }}
        thumbAnimateRange={[0, 70]}
      />
    )
  }

  render() {
    const { title, author, imageUrl, content, status } = this.state
    const disabled = !title || !author || !imageUrl || !content
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <h1>Write a new post</h1>
        <h2>all fields are required</h2>
        <this.FormField label="title" value={title} />
        <this.FormField label="author" value={author} />
        <this.FormField label="imageUrl" value={imageUrl} />
        <this.FormField
          type="textarea"
          label="content"
          value={content}
          form="new-post"
        />
        <this.StatusToggle {...{ status }} />
        <button type="submit" className="button" {...{ disabled }}>
          Submit
        </button>
      </form>
    )
  }
}

const ConnectedPostForm = compose(AddPostAction)(PostForm)
export default ConnectedPostForm

PostForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

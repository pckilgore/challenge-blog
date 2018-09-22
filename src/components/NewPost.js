import React from 'react'
import FormField from './FormField'
import ToggleButton from 'react-toggle-button'

import { compose } from 'react-apollo'
import { AddPostAction } from '../graphql/resolvers'

class NewPost extends React.Component {
  state = {
    title: '',
    author: '',
    imageUrl: '',
    content: '',
    status: 'DRAFT',
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    let payload = {}

    for (let key in this.state) {
      if (this.state[key] !== '') payload[key] = this.state[key]
    }

    await this.props.onAdd(payload)
    this.props.history.push('/')
  }

  handleToggle = value => {
    const status = value ? 'DRAFT' : 'PUBLISHED'
    this.setState({ status })
  }
  handleChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  render() {
    const { title, author, imageUrl, content, status } = this.state
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <h1>Write a new post</h1>
        <h2>all fields are required</h2>
        <FormField onChange={this.handleChange} label="title" value={title} />
        <FormField onChange={this.handleChange} label="author" value={author} />
        <FormField
          onChange={this.handleChange}
          label="image link"
          id="imageUrl"
          value={imageUrl}
        />
        <FormField
          onChange={this.handleChange}
          value={content}
          label="content"
          type="textarea"
          form="new-post"
        />
        <ToggleButton
          value={status === 'PUBLISHED' || false}
          onToggle={this.handleToggle}
          activeLabel={'PUBLISH'}
          inactiveLabel={'DRAFT'}
          trackStyle={{ minWidth: '100px', minHeight: '30px' }}
          thumbStyle={{ minHeight: '30px', minWidth: '30px' }}
          activeLabelStyle={{ fontSize: '.9em' }}
          inactiveLabelStyle={{ fontSize: '.9em' }}
          thumbAnimateRange={[0, 80]}
        />
        <button
          type="submit"
          className="button"
          disabled={!title || !author || !imageUrl || !content}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default compose(AddPostAction)(NewPost)

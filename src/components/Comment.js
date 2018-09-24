import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ author = 'An Anonymous Coward', content, even }) => (
  <li className={even ? 'even' : 'odd'}>
    <h3>{author} said...</h3>
    <p>{content}</p>
  </li>
)

export default Comment

Comment.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  even: PropTypes.bool.isRequired,
}

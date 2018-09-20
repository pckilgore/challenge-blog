import React from 'react'

const Comment = ({ comment, even }) => (
  <li className={even ? 'even' : 'odd'}>
    <h3>{comment.author} said...</h3>
    <p>{comment.text}</p>
  </li>
)

export default Comment

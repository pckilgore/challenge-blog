import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = props => (
  <div className="err">
    <h2>Whoops...</h2>
    <br />
    <h3>...can't find the requested page.</h3>
    <br />
    <br />
    <Link to="/" style={{ textDecoration: 'underline' }}>
      flee to safety
    </Link>
  </div>
)

export default NotFound

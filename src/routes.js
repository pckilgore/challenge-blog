import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import SinglePost from './components/SinglePost'
import NewPost from './components/NewPost'
import NotFound from './components/NotFound'

const Routes = props => (
  <Switch>
    <HomeRoute exact path="/" {...props} />
    <Route exact path="/post/new" component={NewPost} />
    <PostRoute path="/post/:id" />
    <Route component={NotFound} />
  </Switch>
)

const HomeRoute = props => (
  <Route
    {...props}
    render={subprops => <Home {...subprops} posts={props.posts} />}
  />
)

const PostRoute = props => (
  <Route
    {...props}
    render={({ match }) => {
      return <SinglePost id={+match.params.id} />
    }}
  />
)

export default Routes

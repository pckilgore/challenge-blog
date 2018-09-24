import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import PostForm from './components/PostForm'
import SinglePost from './components/SinglePost'
import NotFound from './components/NotFound'

class Routes extends React.Component {
  componentDidMount() {
    this.props.subscribeToNewPosts()
  }

  RouteWithProps = ({ component: Component, withProps, ...props }) => (
    <Route
      {...props}
      render={routeProps => <Component {...routeProps} {...withProps} />}
    />
  )

  render() {
    const { props, RouteWithProps } = this
    return (
      <Switch>
        <RouteWithProps exact path="/" component={Home} withProps={props} />
        <RouteWithProps
          exact
          path="/post/new"
          component={PostForm}
          withProps={props}
        />
        <RouteWithProps
          path="/post/:id"
          component={SinglePost}
          withProps={props}
        />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes

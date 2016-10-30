import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
const Greeting = () => {
  return <div>Hey There</div>
};


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);

// Different routes /, /greet, /greet2..etc
//App is the root container
// IndexRoute is a helper like route, for /, it will also show IndexRoute

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

const Greeting = () => {
  return <div>Hey There</div>
};


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);

// Different routes /, /greet, /greet2..etc
//App is the root container
// IndexRoute is a helper like route, for /, it will also show IndexRoute

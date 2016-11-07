import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// const Greeting = () => {
//   return <div>Hey There</div>
// };


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

//this.props.params.id
// pull the id out of each post

// Different routes /, /greet, /greet2..etc
//App is the root container
// IndexRoute is a helper like route, for /, it will also show IndexRoute

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));

// browserHistory is a object that tells react-router how to make changes based on URL.  Whenever the URL updates, react-router is going to interpret after the protocol
// There is also hashHistory, which keeps track of urls wnding with # and make changes based on anything after #
// history takes url and passes to react router

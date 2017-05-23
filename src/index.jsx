import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/reducers';
import PostsIndex from './components/postsIndex';
import PostsNew from './components/postsNew';
import PostsShow from './components/postsShow';
import root from './helper/root_resolver';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={`${root}/posts/new`} component={PostsNew} />
          <Route path={`${root}/posts/:id`} component={PostsShow} />
          <Route path={`${root}/`} component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Hello = () => <div>Hello!</div>;
const Goodbye = () => <div>Goodbye!</div>;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hi" component={Hello} />
        <Route path="/bye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);

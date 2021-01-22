import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // component
import { createStore } from 'redux'; // this is a function

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  // store is just a prop. we are passing in reducers
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);

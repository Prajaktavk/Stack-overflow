import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

//here Reducers is represents all the reducers combined in the reducers file

const store = createStore( Reducers, compose(applyMiddleware(thunk)))

//thunk used handle asyncronus operation with respective redux

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

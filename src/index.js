import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Connection to redux but not redux
import { Provider } from 'react-redux';
// The redux and use middleware to manipulate,
// data before passing it to the component
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

// Reducers
import rootReducer from './reducers/index';

// COMPONENTS
import Routes from './routes';

const App = () =>{

  return(
    <BrowserRouter>
       <Routes/>
    </BrowserRouter>
  )

}

// Store prop is the connection between react-redux and redux.
// we can do this 'store={createStore}' and that's it, but we
// are going to use middleware too.

// 'createStoreWithMiddleware()' is a function and we will add
// some arguments in the future. It needs a list reducers, so we
// will find a way to combine all the reducers first into one.
// we are doing that in 'reducers/index.js'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);


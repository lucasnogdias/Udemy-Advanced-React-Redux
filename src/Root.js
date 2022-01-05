import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from 'reducers';

const Root = ({initialState={}, children}) => {
  const store = createStore(
    reducers, 
    initialState,
    applyMiddleware(promiseMiddleware)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

export default Root;
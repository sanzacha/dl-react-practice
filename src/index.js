import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReduer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; /* Binding Layer - Bind redux with React */
import thunk from 'redux-thunk'; /* -- Middleware for sync call ---- */
import logger from 'redux-logger';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : state => state
);

const store = createStore(rootReduer, enhancers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
);

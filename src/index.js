import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReduer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; /* Binding Layer - Bind redux with React */
import thunk from 'redux-thunk'; /* -- Middleware for sync call ---- */
// import * as firebase from 'firebase';
import logger from 'redux-logger'

// const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReduer, applyMiddleware(thunk, logger));

// const config = {
//     apiKey: "AIzaSyDFFpdpD8gVPOdr3BuDzt2tkHHTfG_g4Cg",
//     authDomain: "dl-react.firebaseapp.com",
//     databaseURL: "https://dl-react.firebaseio.com",
//     projectId: "dl-react",
//     storageBucket: "dl-react.appspot.com",
//     messagingSenderId: "565844325184"
//   };
//
// firebase.initializeApp(config);
//
// console.log(config);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
);

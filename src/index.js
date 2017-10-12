import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import store from './store';
import Routes from './routes';
import reducers from './reducers';


const MOUNT_NODE = document.getElementById('root')

 ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
    MOUNT_NODE
  )




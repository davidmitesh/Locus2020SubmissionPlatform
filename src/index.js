import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware ,combineReducers} from 'redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routes from './routes';
import App from './components/app';
import promise from "redux-promise";
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>


               <App/>



  </Provider>
  , document.querySelector('.container'));

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { fetchMiddleware } from 'redux-recompose';

import game from './Game/reducer';
import login from './Login/reducer';

export const history = createHistory();

const reducers = combineReducers({
  game,
  form,
  login
});

const middlewares = [routerMiddleware(history), fetchMiddleware];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  eslint-disable-next-line
const store = createStore(reducers, composeEnhancers(...enhancers));

export default store;

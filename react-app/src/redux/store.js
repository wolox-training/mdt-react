import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import game from './Game/reducer';
import login from './Login/reducer';
import topbar from './Topbar/reducer';

const reducers = combineReducers({
  game,
  form: formReducer,
  login,
  topbar
});

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  eslint-disable-next-line
const store = createStore(reducers, composeEnhancers(...enhancers));

export default store;

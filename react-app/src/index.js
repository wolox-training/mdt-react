import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Game from '../src/app/screens/Game';
import Login from '../src/app/screens/LoginFormContainer';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import './scss/index.scss';

const validateLogin = isLogged => (isLogged ? <Game /> : <Redirect to="/login" />);

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" render={() => validateLogin(false)} />
        <Route path="/login" component={Login} />
      </Fragment>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

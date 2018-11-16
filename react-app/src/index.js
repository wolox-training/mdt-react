import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from '../src/app/screens/Game';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import './scss/index.scss';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

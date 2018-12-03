import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Routes from './app/components/Routes/index';

import './scss/index.scss';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import Routes from './app/components/Routes';
import './scss/index.scss';
import ActionCreators from './redux/Login/actions';

class App extends Component {
  componentDidMount() {
    store.dispatch(ActionCreators.getUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

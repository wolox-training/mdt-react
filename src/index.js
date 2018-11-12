import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import Game from '../src/app/components/Game'; // eslint-disable-line import/first

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

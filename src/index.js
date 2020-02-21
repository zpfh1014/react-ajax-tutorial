import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Animation.css';
import 'semantic-ui-css/semantic.min.css';
import 'es6-promise/auto';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

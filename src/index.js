import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();

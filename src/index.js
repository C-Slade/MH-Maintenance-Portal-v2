import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
<Router>
    <App />
</Router>
, document.getElementById('root'));

serviceWorker.unregister();

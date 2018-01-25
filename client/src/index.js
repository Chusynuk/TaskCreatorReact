import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

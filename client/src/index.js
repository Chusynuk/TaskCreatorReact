import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
// import AppRoutes from './routes';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(

<App/>
, document.getElementById('root'));
registerServiceWorker();

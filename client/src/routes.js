import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import Success from './components/Success';
import TaskForm from './components/TaskForm';


class AppRoutes extends React.Component {
  render() {
    return (
      <App>
        <Route path="/" component={TaskForm}/>
        <Route path="Success" component={Success}/>
      </App>
    );
  }
}
export default AppRoutes;

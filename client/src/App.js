import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <Form></Form>
      </div>
    </MuiThemeProvider>);
  }
}

export default App;

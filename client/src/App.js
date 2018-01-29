import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskForm from './components/TaskForm';

class App extends React.Component {

  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
              <TaskForm/>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-font">Snack Notes</div>
        </div>
        <IdeasContainer />
      </div>
    );
  }
}

export default App
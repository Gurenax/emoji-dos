import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import TodoItem from './component/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem description='First' completed />
        <TodoItem description='Second' completed />
        <TodoItem description='Third' />
      </div>
    )
  }
}

export default App

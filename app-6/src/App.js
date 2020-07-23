import React, { Component } from 'react';
import ToDo from './Components/ToDo';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      input: value
    })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1> My To-Do List</h1>

        <div>
          <input value={this.state.input} placeholder="Enter New Task"
          onChange={ e => this.handleInputChange(e.target.value)} />
          <button onClick={this.handleAddTask}> Add </button>
        </div>

        <br />

        {list}
      </div>
    )
  }
}

export default App;

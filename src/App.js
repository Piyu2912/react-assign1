import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import './Assign1/Style.css'
import ClassComp from './Assign1/ClassComp';
import FunctionComp from './Assign1/FunctionComp';



class App extends Component {
  constructor() {
    super();

    this.state = {
      box1: false,
      box2: false
    }
  }


  render() {
    return (
      <div className="App">
        <p id='head'>Styling Using Functional and Class Component</p>
        <button className='button' onClick={() => this.setState({ box1: !this.state.box1 })}>To see styling in functional component</button>
        <button className='button' onClick={() => this.setState({ box2: !this.state.box2 })}>To see styling in class component</button>
        { this.state.box1 ? <FunctionComp /> : null }
        { this.state.box2 ? <ClassComp /> : null }
      </div>
    )
  }
}

export default App










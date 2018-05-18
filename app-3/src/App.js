import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      listArr: ['Hifumi', 'Glacial', 'Hopeless', 'Otown', 'Anstormning'],
      userInput: ''
    }
  }

  arrList = (val) => {
    let arr = [];
    for (let i=0;i<this.state.listArr.length;i++) {
      if (this.state.listArr[i].indexOf(val) > -1) {
        arr.push(<h2>{this.state.listArr[i]}</h2>)
      }
    }

    return arr
  }

  changeHandler = (val) => {
    this.setState({userInput: val})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)}></input>
        {this.arrList(this.state.userInput)}
      </div>
    );
  }
}

export default App;

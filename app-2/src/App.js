import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      listArr: ['Hifumi', 'Glacial', 'Otown', 'Hopeless', 'Anstormning']
    }
  }

  listFun = () => {
    let arr = [];
    for (let i=0;i<this.state.listArr.length;i++) {
      arr.push(<li>{this.state.listArr[i]}</li>)
    }

    return arr
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.listFun()}
        </ul>
      </div>
    );
  }
}

export default App;

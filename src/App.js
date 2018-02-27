import React, { Component } from 'react';
import './App.css';
const n = 10;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      left: []
    }
  }

  initVals() {
    let { left, top } = this.state;
    for (let i = 0; i < n; i++) {
      left.push(Math.floor(Math.random() * 100) + "vw");
      top.push(Math.floor(Math.random() * 100) + "vh");
    }
    this.setState({ left, top });
  }

  componentDidMount() {
    this.initVals();
    console.log("ComponentMounted");
    setInterval(() => {
      console.log("Redrawing");
      this.call()
    }, 5000);
  }

  call() {
    let { left, top } = this.state;
    console.log("Length is: ", left.length);
    for (let i = 0; i < top.length; i++) {
      left[i] = Math.floor(Math.random() * 100) + "vw";
      top[i] = Math.floor(Math.random() * 100) + "vh";
    }
    this.setState({ left, top });
  }

  createDot() {
    let { left, top } = this.state;
    return top.map((topElement, index) => {
      return (
        <div style={{
          position: "absolute", width: '5px', height: '5px', top: top[index], left: left[index], backgroundColor: "red"
        }} key={"dot_" + index}>
        </div>)
    })
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.createDot()}
      </div>
    );
  }
}

export default App;

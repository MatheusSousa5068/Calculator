import React, { Component } from "react";
import * as math from 'mathjs'

// Imports
import Button from "./components/Button";
import Input from "./components/Input";
import Clear from './components/Clear';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.adding = this.adding.bind(this)
  }

  adding = val => {
    this.setState({input: this.state.input + val})
  }

  handleEqual = val => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.adding}>7</Button>
            <Button handleClick={this.adding}>8</Button>
            <Button handleClick={this.adding}>9</Button>
            <Button handleClick={this.adding}>/</Button>
          </div>

          <div className="row">
            <Button handleClick={this.adding}>4</Button>
            <Button handleClick={this.adding}>5</Button>
            <Button handleClick={this.adding}>6</Button>
            <Button handleClick={this.adding}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.adding}>1</Button>
            <Button handleClick={this.adding}>2</Button>
            <Button handleClick={this.adding}>3</Button>
            <Button handleClick={this.adding}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.adding}>.</Button>
            <Button handleClick={this.adding}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.adding}>-</Button>
          </div>
          <div className="row">
            <Clear handleClear={() => this.setState({input: ''})}>Clear</Clear>
          </div>
        </div>
      </div>
    );
  }
}

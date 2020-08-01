import React, { Component } from "react";

// Imports
import Button from "./components/Button";
import Input from "./components/Input";
import Clear from './components/Clear'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9a</Button>
            <Button>/</Button>
          </div>

          <div className="row">
            <Button>4</Button>
            <Button>521</Button>
            <Button>6</Button>
            <Button>&times;</Button>
          </div>

          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>

          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Clear handleClear={() => this.setState({input: ''})}>Clear</Clear>
          </div>
        </div>
      </div>
    );
  }
}

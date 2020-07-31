import React from 'react';

// Imports
import Button from './components/Button'
import Input from './components/Input'
//import Clear from './components/Clear'

export default props =>
  <div className='App'>
    <div className="calc-wrapper">
      <div className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </div>

      <div className="row">
        <Button>4</Button>
        <Button>5</Button>
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
    </div>
  </div>
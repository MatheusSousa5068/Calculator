import React from "react";

import "./index.css";


// This function checks whether the entered value is a number, a point or an equal
const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};


export default (props) => (
  <>
    <div //if props.children is an operator, he will receive the class "operator"
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"  
      }`}
    >
      {props.children}
    </div>
  </>
);

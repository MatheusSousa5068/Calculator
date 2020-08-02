import React from "react";
import "./index.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export default props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

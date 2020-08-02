import React from "react";
import "./index.css";

export default props => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);

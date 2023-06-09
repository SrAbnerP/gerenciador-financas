import React from "react";

export default function Form(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </div>
  );
}

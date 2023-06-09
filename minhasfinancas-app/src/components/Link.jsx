import React from "react";

export default function Link(props) {
  return (
    <li className="nav-item">
      <a onClick={props.onClick} className="nav-link" href={props.href}>
        {props.label}
      </a>
    </li>
  );
}

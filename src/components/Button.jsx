import React from "react";

const Button = (props) => {
  return <button className={`btn ${props.className}`}>{props.text}</button>;
};

export default Button;

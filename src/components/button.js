import React from "react";
import "./button.css";

const Button = (props) => {
  return(
    <button type="button" className={props.btn} onClick={props.function} disabled={props.disabled}>
      {props.content}
    </button>
  );
}

export default Button;
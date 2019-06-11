import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title">
      <h1>{props.children}</h1> <h2>Correct Guesses:</h2>
    </div>
  );
}

export default Title;

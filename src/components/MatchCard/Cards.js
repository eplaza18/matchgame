import React from "react";

import "./style.css";

function Cards(props) {
  return (
    <div className="card">
      <span onClick={() => alert(props.name)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </span>
    </div>
  );
}

export default Cards;

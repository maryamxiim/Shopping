import React from "react";
import card from "../assets/Rectangle21.png";
import "./cardheading.css";

function CardHeading({ header, title, content }) {
  return (
    <div className="App">
      <div className="card">
        <h4>{header}</h4>
        <h1>
          <b>{title}</b>
        </h1>
        <h4>{content}</h4>
      </div>
    </div>
  );
}

export default CardHeading;

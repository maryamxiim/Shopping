import React from 'react';
import './cardheading.css';

function CardHeading({ header, title, content }) {
  return (
    <div className="cardHeading">
      <h4>{header}</h4>
      <h2>
        <b>{title}</b>
      </h2>
      <h4>{content}</h4>
    </div>
  );
}

export default CardHeading;

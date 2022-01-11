import React from 'react';
import './cardheading2.scss';

function CardHeading2({ header, title, content }) {
  return (
    <div className="card-heading2">
      <h4>{header}</h4>
      <h1>
        <b>{title}</b>
      </h1>
      <h4>{content}</h4>
    </div>
  );
}

export default CardHeading2;

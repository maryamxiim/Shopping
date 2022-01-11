import React from 'react';
import './cardheading.scss';

function CardHeading({ header, title, content }) {
  return (
    <div className="card-heading">
      <h4>{header}</h4>
      <h2>
        <b>{title}</b>
      </h2>
      <h4>{content}</h4>
    </div>
  );
}

export default CardHeading;

import React from 'react';
import './cardheading.scss';

function CardHeading({ data }) {
  const { header, title, content, background, color } = data;
  return (
    <div className="card-heading" style={{ backgroundImage: `URL(${background})` }}>
      <h4 style={{ color }}>{header}</h4>
      <h2 style={{ color }}>
        <b>{title}</b>
      </h2>
      <h4 style={{ color }}>{content}</h4>
    </div>
  );
}

export default CardHeading;

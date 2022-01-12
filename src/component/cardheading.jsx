import React from 'react';
import './cardheading.scss';
// import back1 from '../assets/exhead2.png';

function CardHeading({ header, title, content, back1, color }) {
  return (
    <div className="card-heading" style={{ backgroundImage: `URL(${back1})` }}>
      <h4 style={{ color }}>{header}</h4>
      <h2 style={{ color }}>
        <b>{title}</b>
      </h2>
      <h4 style={{ color }}>{content}</h4>
    </div>
  );
}

export default CardHeading;

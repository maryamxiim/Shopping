import React from 'react';

function Productusp({ img, title, caption }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5>{caption}</h5>
    </div>
  );
}

export default Productusp;

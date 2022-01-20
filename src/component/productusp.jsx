import React from 'react';

function ProductUsp({ img, title, caption }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5>{caption}</h5>
    </div>
  );
}

export default ProductUsp;

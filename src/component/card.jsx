import React from 'react';
import { Card } from 'antd';

function Cards({ img, productname, price, off }) {
  return (
    <div className="Card">
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src={img} style={{ padding: '10px' }} />}>
        <h3> {productname}</h3>

        <s style={{ textAlign: 'center', color: 'red', float: 'left' }}>{price} تومان</s>
        <br />
        <h4 style={{ textAlign: 'left' }}>{off} تومان</h4>
      </Card>
    </div>
  );
}

export default Cards;

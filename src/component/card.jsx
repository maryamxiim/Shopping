import React from 'react';
import { Card } from 'antd';
import './card.css';

function Cards({
  img, productname, price, off,
}) {
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={img} />}
      >

        <h3>
          {' '}
          {productname}
        </h3>

        <s style={{ textAlign: 'center', color: 'red', float: 'left' }}>
          {price}
          {' '}
          تومان
        </s>
        <br />
        <h4 style={{ textAlign: 'left' }}>

          {off}
          {' '}
          تومان

        </h4>
      </Card>

    </div>
  );
}

export default Cards;

import React from 'react';
import { Card } from 'antd';

function Cards({ img, productname, price, off }) {
  const nf = new Intl.NumberFormat();
  price.toLocaleString('en');
  const prices = nf.format(price);
  const offs = nf.format(off);

  return (
    <div className="Card">
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src={img} style={{ padding: '10px' }} />}>
        <h3> {productname}</h3>

        <s style={{ textAlign: 'center', color: 'red', float: 'left' }}>{prices} تومان</s>
        <br />
        <h4 style={{ textAlign: 'left' }}>{offs} تومان</h4>
      </Card>
    </div>
  );
}

export default Cards;

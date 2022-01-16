import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import CardHeading from './cardheading';
import Cards from './card';
import './produtsrow.scss';

// const img = [];

function Productsrow({ header, carrds, card1, card2, card3, card4, img }) {
  const cards = ['card1', 'card2', 'card3', 'card4'];
  console.log('cardsss', carrds);
  return (
    <div className="products-row">
      <Row className="products-row-content">
        <Col lg={6} xs={24}>
          {/* <Link to="/shopping/products-list"> */}
          <CardHeading
            header={header.header}
            title={header.title}
            content={header.content}
            back1={header.background}
            color={header.color}
          />
          {/* </Link> */}
        </Col>
        {/* card1.map */}

        <Col lg={16} xs={6} className="cardss">
          {carrds?.map((card) => (
            <Link to="/shopping/productslist">
              <Cards
                key={card.name}
                img={card.img}
                productname={card.name}
                price={card.price}
                off={card.off}
              />
            </Link>
          ))}{' '}
        </Col>

        {/* <Link to="/shopping/productslist">
            <Cards img={card1.img} productname={card1.name} price={card1.price} off={card1.off} />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={card2.img} productname={card2.name} price={card2.price} off={card2.off} />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={card3.img} productname={card3.name} price={card3.price} off={card3.off} />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={card4.img} productname={card4.name} price={card4.price} off={card4.off} />
          </Link>
        </Col> */}
      </Row>
    </div>
  );
}

export default Productsrow;

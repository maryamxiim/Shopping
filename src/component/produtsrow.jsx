import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import CardHeading from './cardheading';
import Cards from './card';
import './produtsrow.scss';

function Productsrow({ header, cards }) {
  return (
    <div className="products-row">
      <Row className="products-row-content">
        <Col lg={6} xs={24}>
          <CardHeading data={header} />
        </Col>
        <Col lg={16} xs={24} className="cardss">
          {cards?.map((card) => (
            <Col xs={12} sm={6} className="cardss">
              <Link to="/shopping/productslist">
                <Cards
                  key={card.name}
                  img={card.img}
                  productname={card.name}
                  price={card.price}
                  off={card.off}
                />
              </Link>
            </Col>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow;

import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Rectangle27 from '../assets/Rectangle27.png';
import ex1 from '../assets/vaz1.jpg';
import ex2 from '../assets/vaz2.jpg';
import ex3 from '../assets/vaz3.jpg';
import ex4 from '../assets/vaz4.jpg';
import CardHeading2 from './cardheading2';
import Cards from './card';
import './produtsrow2.scss';

function Productsrow2() {
  return (
    <div className="products-row">
      <Row className="products-row-content">
        <Col lg={6} xs={24}>
          <Link to="/shopping/products-list">
            <CardHeading2
              title="بازدیدهای اخیر شما"
              content="اورم ایپسوم متن ساختگی برای استفاده طراحان است"
            />
          </Link>
        </Col>

        <Col lg={4} xs={12} style={{ padding: '10px ' }}>
          <Link to="/shopping/productslist">
            <Cards img={ex4} productname="محصول1" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px ' }}>
          <Link to="/shopping/productslist">
            <Cards img={ex3} productname="محصول 2" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px ' }}>
          <Link to="/shopping/productslist">
            <Cards img={ex2} productname="محصول 3" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px ' }}>
          <Link to="/shopping/productslist">
            <Cards img={ex1} productname="محصول 4" price="200,000" off="20,000" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow2;

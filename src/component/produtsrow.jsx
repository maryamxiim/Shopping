import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import Rectangle27 from '../assets/Rectangle27.png';
import CardHeading from './cardheading';
import Cards from './card';
import './produtsrow.scss';

function Productsrow({ header, card1, card2, card3, card4 }) {
  return (
    <div className="products-row">
      <Row className="products-row-content">
        <Col lg={6} xs={24}>
          <Link to="/shopping/products-list">
            <CardHeading
              header={header.header}
              // title="پرفروش ترین کفش های ورزشی"
              title={header.title}
              // content="اورم ایپسوم متن ساختگی برای استفاده طراحان است"
              content={header.content}
              back1={header.background}
              color={header.color}
            />
          </Link>
        </Col>

        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
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
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow;

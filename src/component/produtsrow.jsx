import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Rectangle27 from '../assets/Rectangle27.png';
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import CardHeading from './cardheading';
import Cards from './card';
import './produtsrow.scss';

function Productsrow({ products, background }) {
  return (
    <div className="products-row">
      <Row className="products-row-content">
        <Col lg={6} xs={24}>
          <Link to="/shopping/products-list">
            <CardHeading
              header="لواازم ورزشی"
              title="پرفروش ترین کفش های ورزشی"
              content="اورم ایپسوم متن ساختگی برای استفاده طراحان است"
            />
          </Link>
        </Col>

        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={shoe1} productname="محصول1" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={shoe2} productname="محصول 2" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={shoe3} productname="محصول 3" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col lg={4} xs={12} style={{ padding: '10px' }}>
          <Link to="/shopping/productslist">
            <Cards img={shoe4} productname="محصول 4" price="200,000" off="20,000" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow;

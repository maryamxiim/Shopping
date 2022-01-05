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
import './produtsrow.css';

function Productsrow() {
  return (
    <div className="productsrow">
      <Row className="productsrow-content">
        <Col span={6}>
          <Link to="/shopping/productslist">
            <CardHeading
              header="لواازم آرایشی"
              title="عنوان این قسمت"
              content="اورم ایپسوم متن ساختگی برای استفاده طراحان است"
            />
          </Link>
        </Col>

        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={shoe1} productname="محصول1" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={shoe2} productname="محصول 2" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={shoe3} productname="محصول 3" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={shoe4} productname="محصول 4" price="200,000" off="20,000" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow;

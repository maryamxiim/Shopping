import React from 'react';
// import card from '../assets/Rectangle21.png';
import {
  Row, Col,
} from 'antd';
import { Link } from 'react-router-dom';

import Rectangle27 from '../assets/Rectangle27.png';
// import './cardheading.css';
import CardHeading from './cardheading';
import Cards from './card';
import './produtsrow.css';

function Productsrow() {
  return (
    <div className="App">
      <Row className="product-usps">
        <Col span={6}>
          <Link to="/shopping/productslist">
            <CardHeading header="لواازم آرایش" title="عنوان لوازم" content="لووووورم" />
          </Link>
        </Col>

        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={Rectangle27} productname="محصول1" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={Rectangle27} productname="محصول 2" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">

            <Cards img={Rectangle27} productname="محصول 3" price="200,000" off="20,000" />
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/shopping/productslist">
            <Cards img={Rectangle27} productname="محصول 4" price="200,000" off="20,000" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Productsrow;

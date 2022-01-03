import 'antd/dist/antd.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Row, Col, Input, Button,
  Layout, Menu,
  Card,
} from 'antd';
import picture2 from '../assets/Rectangle19.png';
import picture3 from '../assets/Rectangle20.png';
import icon24 from '../assets/icon24.png';
import iconhaml from '../assets/iconhaml.png';
import iconpay from '../assets/iconpay.png';
import iconoff from '../assets/iconoff.png';
import Rectangle27 from '../assets/Rectangle27.png';
import card from '../assets/Group26.png';
import './mainpage.css';
import Headers from '../component/header';
import Footer from '../component/footer';
import Cards from '../component/card';
import CardHeading from '../component/cardheading';
import Productsrow from '../component/produtsrow';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header } = Layout;

function Mainpage() {
  return (
    <div className="App">
      <Headers />
      <Row style={{ margin: '30px' }} className="slide">
        <Col span={16}><img src={picture2} alt="" style={{ width: '100%' }} /></Col>
        <Col span={5}><img src={picture3} alt="" style={{ width: '100%' }} /></Col>
      </Row>
      <Row className="product-usp">
        <Col span={3}>
          <div className="product">
            <img src={icon24} alt="" />
            <h4>پشتیبانی 24 ساعته</h4>
            <h5>همیشه هستیم!</h5>
          </div>
        </Col>
        <Col span={3}>
          <div className="product">
            <img src={iconhaml} alt="" />
            <h4>ارسال رایگان</h4>
            <h5>تا دستان شما</h5>
          </div>

        </Col>
        <Col span={3}>
          <div className="product">
            <img src={iconpay} alt="" />
            <h4>پرداخت آسان</h4>
            <h5>نقدی و اعتباری</h5>
          </div>

        </Col>
        <Col span={3}>
          <div className="product">
            <img src={iconoff} alt="" />
            <h4>همواره تخفیف</h4>
            <h5>چی ازاین بهتر؟</h5>
          </div>

        </Col>
      </Row>
      {/* <Row></Row> */}

      <Row><Productsrow /></Row>
      <Row><Productsrow /></Row>

      <Footer />
    </div>
  );
}

export default Mainpage;

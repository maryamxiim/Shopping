import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Productusp from '../../component/productusp';
import icon24 from '../../assets/icon24.png';
import iconhaml from '../../assets/iconhaml.png';
import iconpay from '../../assets/iconpay.png';
import iconoff from '../../assets/iconoff.png';
import slide22 from '../../assets/slide22.jpg';
import left1 from '../../assets/left1.jpg';
import left2 from '../../assets/left2.jpg';
import Headers from '../../component/header';
import Footer from '../../component/footer';
import Productsrow from '../../component/produtsrow';
import shoe1 from '../../assets/shoe1.jpg';
import shoe2 from '../../assets/shoe2.jpg';
import shoe3 from '../../assets/shoe3.jpg';
import shoe4 from '../../assets/shoe4.jpg';
import ex1 from '../../assets/vaz1.jpg';
import ex2 from '../../assets/vaz2.jpg';
import ex3 from '../../assets/vaz3.jpg';
import ex4 from '../../assets/vaz4.jpg';
import bac1 from '../../assets/exhead2.png';
import bac2 from '../../assets/exhead.png';
import './mainpage.scss';

function Mainpage() {
  return (
    <div className="mainpage">
      <Headers />
      <Row className="slide">
        <Col lg={15} xs={24}>
          <Link to="/">
            <img className="slide-right" src={slide22} alt="" />
          </Link>
        </Col>
        <Col lg={7} xs={24}>
          <Link to="/">
            <img src={left1} alt="" className="slide-left-top" />
          </Link>

          <Link to="/">
            <img src={left2} alt="" className="slide-left-bottom" />
          </Link>
        </Col>
      </Row>
      <Row className="product-usp">
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <Productusp img={icon24} title="پشتیبانی 24 ساعته" caption="همیشه هستیم!" />
          </div>
        </Col>
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <Productusp img={iconhaml} title="ارسااال رایگان" caption="تا دستان شما" />
          </div>
        </Col>
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <Productusp img={iconpay} title="پرداخت آسان" caption="نقدی و اعتباری" />
          </div>
        </Col>
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <Productusp img={iconoff} title="همواره تخفیف" caption="چی ازاین بهتر؟" />
          </div>
        </Col>
      </Row>

      <Productsrow
        header={{
          header: 'لوازم ورزشی',
          title: 'پرفروش ترین کفش های ورزشی',
          content: 'لورم ایپسوم متن ساختگی برای استفاده طراحان است',
          background: bac2,
          color: '#D6432F'
        }}
        cards={[
          { img: shoe1, name: 'محصول 1', price: '20000', off: '20000' },
          { img: shoe2, name: 'محصول 2', price: '20000', off: '20000' },
          { img: shoe3, name: 'محصول 3', price: '20000', off: '20000' },
          { img: shoe4, name: 'محصول 4', price: '20000', off: '20000' }
        ]}
      />

      <Productsrow
        header={{
          title: 'بازدیدهای اخیر شما',
          content: 'لورم ایپسوم متن ساختگی برای استفاده طراحان است',
          background: bac1,
          color: 'white'
        }}
        cards={[
          { img: ex1, name: 'محصول 1', price: '50000', off: '20000' },
          { img: ex2, name: 'محصول 2', price: '20000', off: '20000' },
          { img: ex3, name: 'محصول 3', price: '20000', off: '20000' },
          { img: ex4, name: 'محصول 4', price: '20000', off: '20000' }
        ]}
      />

      <Footer />
    </div>
  );
}

export default Mainpage;

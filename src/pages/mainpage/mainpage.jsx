import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
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
  // const nf = new Intl.NumberFormat();
  // nf.format(card1.off);
  // console.log(card1);
  return (
    <div className="mainpage">
      <Headers />
      <Row style={{ padding: '20px' }} className="slide">
        <Col lg={15} xs={24}>
          <Link to="/">
            <img
              src={slide22}
              alt=""
              style={{ maxWidth: '100%', borderRadius: '16px', marginBottom: '25px' }}
            />
          </Link>
        </Col>
        <Col lg={7} xs={24}>
          <Link to="/">
            <img src={left1} alt="" style={{ maxWidth: '100%', borderRadius: '16px' }} />
          </Link>

          <Link to="/">
            <img
              src={left2}
              alt=""
              style={{ maxWidth: '100%', marginTop: '25px', borderRadius: '16px' }}
            />
          </Link>
        </Col>
      </Row>
      <Row className="product-usp">
        <Col xl={3} xs={12} style={{ marginBottom: '5px' }}>
          <div className="product-usp-item">
            <img src={icon24} alt="" />
            <h4>پشتیبانی 24 ساعته</h4>
            <h5>همیشه هستیم!</h5>
          </div>
        </Col>
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <img src={iconhaml} alt="" />
            <h4>ارسال رایگان</h4>
            <h5>تا دستان شما</h5>
          </div>
        </Col>
        <Col xl={3} xs={12} style={{ marginBottom: '5px' }}>
          <div className="product-usp-item">
            <img src={iconpay} alt="" />
            <h4>پرداخت آسان</h4>
            <h5>نقدی و اعتباری</h5>
          </div>
        </Col>
        <Col xl={3} xs={12}>
          <div className="product-usp-item">
            <img src={iconoff} alt="" />
            <h4>همواره تخفیف</h4>
            <h5>چی ازاین بهتر؟</h5>
          </div>
        </Col>
      </Row>
      {/* <Row></Row> */}

      <Row>
        <Productsrow
          header={{
            header: 'لوازم ورزشی',
            title: 'پرفروش ترین کفش های ورزشی',
            content: 'اورم ایپسوم متن ساختگی برای استفاده طراحان است',
            background: bac2,
            color: '#D6432F'
          }}
          card1={{ img: shoe1, name: 'محصول 1', price: '20000', off: '20000' }}
          card2={{ img: shoe2, name: 'محصول 2', price: '20000', off: '20000' }}
          card3={{ img: shoe3, name: 'محصول 3', price: '20000', off: '20000' }}
          card4={{ img: shoe4, name: 'محصول 4', price: '20000', off: '20000' }}
        />
      </Row>
      <Row>
        <Productsrow
          header={{
            title: 'بازدیدهای اخیر شما',
            content: 'اورم ایپسوم متن ساختگی برای استفاده طراحان است',
            background: bac1,
            color: 'white'
          }}
          // carrds={[]}
          card1={{ img: ex1, name: 'محصول 1', price: '50000', off: '20000' }}
          card2={{ img: ex2, name: 'محصول 2', price: '20000', off: '20000' }}
          card3={{ img: ex3, name: 'محصول 3', price: '20000', off: '20000' }}
          card4={{ img: ex4, name: 'محصول 4', price: '20000', off: '20000' }}
        />
      </Row>

      <Footer />
    </div>
  );
}

export default Mainpage;

import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import picture2 from '../../assets/Rectangle19.png';
import picture3 from '../../assets/Rectangle20.png';
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
import Productsrow2 from '../../component/produtsrow2';
import './mainpage.scss';

function Mainpage() {
  return (
    <div className="mainpage">
      <Headers />
      <Row style={{ padding: '20px' }} className="slide">
        <Col lg={15} xs={24}>
          <img
            src={slide22}
            alt=""
            style={{ maxWidth: '100%', borderRadius: '16px', marginBottom: '25px' }}
          />
        </Col>
        <Col lg={7} xs={24}>
          <img src={left1} alt="" style={{ maxWidth: '100%', borderRadius: '16px' }} />

          <img
            src={left2}
            alt=""
            style={{ maxWidth: '100%', marginTop: '25px', borderRadius: '16px' }}
          />
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
        <Productsrow header="sss" products={[{}]} />
      </Row>
      <Row>
        <Productsrow2 />
      </Row>

      <Footer />
    </div>
  );
}

export default Mainpage;
